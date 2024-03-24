import React, { useContext, useEffect, useMemo } from 'react';
import type { CollapseProps } from 'antd';
import { Button, Collapse } from 'antd';
import { getSuggestionExtendedEngagement, getSuggestionExtendedFollowing } from './api';
import { LocalStorageContext } from '../App';
import axios from 'axios';

const LOCAL_HOST_API_URL = 'http://localhost:3000/'


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

const SuggestionAccordion: React.FC = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const storageContext = useContext(LocalStorageContext)
    useEffect(() => {
        (async () => {
            const suggestionFollowing = await getSuggestionExtendedFollowing(storageContext?.username as string)
            const suggestionFollowinPromises = suggestionFollowing.map((item: any, index: number) => {
                try {
                    const config = {
                        method: 'get',
                        url: `${LOCAL_HOST_API_URL}api/user-data/${item.fid}`
                    }
                    return axios.request(config).then(response => ({
                        requestData: item,
                        responseData: response.data.data
                    })).catch((error) => {
                        return null
                    });
                } catch (error) {
                    return null
                }
            }).filter((item: any) => item !== null)
            const awaitFollowingResponse = (await Promise.all(suggestionFollowinPromises)).filter(item => item !== null)




            const suggestionEngagement = await getSuggestionExtendedEngagement(storageContext?.username as string)
            const suggestionEngagementPromises = suggestionEngagement.map((item: any, index: number) => {
                try {
                    const config = {
                        method: 'get',
                        url: `${LOCAL_HOST_API_URL}api/user-data/${item.fid}`
                    }
                    return axios.request(config).then(response => ({
                        requestData: item,
                        responseData: response.data.data
                    })).catch(error => {
                        return null
                    });
                } catch (error) {
                    return null
                }
            }).filter((item: any) => item !== null)
            const awaitEngagementResponse = (await Promise.all(suggestionEngagementPromises)).filter(item => item !== null)


            storageContext?.setSuggestionExtended({
                suggestionFollowing: awaitFollowingResponse, suggestionEngagement: awaitEngagementResponse
            })

        })()
    }, [])
    const suggestionFollowingItems = useMemo(() => {
        return storageContext?.suggestionFollowing?.map((item: any, index: number) => {
            return ({
                key: index + 1,
                label: <div className=' text-white font-mono'>{item.requestData.fname}</div>,
                children: <div>
                    <div>
                        {item.username}
                    </div>
                    <div>
                        <div className=' font-mono text-[18px]'>
                            <div className=' text-[12px] font-semibold'>
                                Bio:
                            </div>
                            <div>
                                {item.responseData.bio}
                            </div>
                        </div>
                        <div className=' font-mono text-[18px]'>
                            <div className=' text-[12px] font-semibold'>
                                Display Name:
                            </div>
                            <div>
                                {item.responseData.display_name}
                            </div>
                        </div>
                        <div className=' font-mono text-[18px]'>
                            <div className=' text-[12px] font-semibold'>
                                Followers Count:
                            </div>
                            <div>
                                {item.responseData.follower_count}
                            </div>
                        </div>
                        <div className=' font-mono text-[18px]'>
                            <div className=' text-[12px] font-semibold'>
                                Following Count:
                            </div>
                            <div>
                                {item.responseData.following_count}
                            </div>
                        </div>
                        <div className=' font-mono text-[18px]'>
                            <div className=' text-[12px] font-semibold'>
                                Verified Address Count:
                            </div>
                            <div>
                                {item.responseData.verifications.length}
                            </div>
                        </div>
                    </div>
                </div>
            })
        })
    }, [storageContext?.suggestionFollowing])
    const suggestionEngagementItems = useMemo(() => {
        return storageContext?.suggestionEngagement?.map((item: any, index: number) => {
            return ({
                key: index + 1,
                label: <div className=' text-white font-mono'>{item.requestData.fname}</div>,
                children: <div>
                <div>
                    {item.username}
                </div>
                <div>
                    <div className=' font-mono text-[18px]'>
                        <div className=' text-[12px] font-semibold'>
                            Bio:
                        </div>
                        <div>
                            {item.responseData.bio}
                        </div>
                    </div>
                    <div className=' font-mono text-[18px]'>
                        <div className=' text-[12px] font-semibold'>
                            Display Name:
                        </div>
                        <div>
                            {item.responseData.display_name}
                        </div>
                    </div>
                    <div className=' font-mono text-[18px]'>
                        <div className=' text-[12px] font-semibold'>
                            Followers Count:
                        </div>
                        <div>
                            {item.responseData.follower_count}
                        </div>
                    </div>
                    <div className=' font-mono text-[18px]'>
                        <div className=' text-[12px] font-semibold'>
                            Following Count:
                        </div>
                        <div>
                            {item.responseData.following_count}
                        </div>
                    </div>
                    <div className=' font-mono text-[18px]'>
                        <div className=' text-[12px] font-semibold'>
                            Verified Address Count:
                        </div>
                        <div>
                            {item.responseData.verifications.length}
                        </div>
                    </div>
                </div>
            </div>
            })
        })
    }, [storageContext?.suggestionEngagement])
    return (
        <>
            <div className='flex flex-col gap-3'>
                <div>
                    <div className=' text-xl font-mono font-semibold mb-[12px]'>
                        Extended Following Suggestion:
                    </div>
                    <Collapse items={suggestionFollowingItems} defaultActiveKey={['1']} onChange={onChange} />
                </div>
                <hr className='w-full mt-[12px]' />
                <div>
                    <div className=' text-xl font-mono font-semibold mb-[12px]'>
                        Extended Engagement Suggestion:
                    </div>
                    <Collapse items={suggestionEngagementItems} defaultActiveKey={['1']} onChange={onChange} />
                </div>
            </div>
        </>);
};

export default SuggestionAccordion;