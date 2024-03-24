import { Progress } from 'antd'
import React, { useContext } from 'react'
import { LocalStorageContext } from '../App'

export default function UserLimit() {
    const storageContext = useContext(LocalStorageContext)
    return (
        <div className='mt-[12px] mb-[12px]'>
            <hr className='w-full' />
            <div className=' text-[20px] font-mono text-white mt-[12px]'>
                STORAGE STATS
            </div>
            <div>
                {
                    storageContext?.userLimit?.map((item: any, index: number) => {
                        if (item.storeType !== "STORE_TYPE_USERNAME_PROOFS") {
                            return <div key={index}>
                                <div className=' text-lg font-mono'>
                                    {
                                        item.storeType.split('_').pop().charAt(0) + item.storeType.split('_').pop().slice(1).toLowerCase()
                                    }
                                </div>
                                <Progress percent={(item.used / item.limit) * 100} key={index} trailColor='#3e2069' className='text-white font-mono' />
                                <div className=' text-white font-mono text-[12px]'>
                                    <div>
                                        Used: {item.used} out of {item.limit}
                                    </div>
                                </div>
                            </div>
                        }
                        else {
                            return null
                        }
                    }).filter((item: any) => item !== null)
                }
            </div>
            <div className='  text-[11px] text-[#f37fb7] font-mono font-semibold'>
                Source: Pinata
            </div>
        </div>
    )
}
