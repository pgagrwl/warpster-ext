import React, { ChangeEvent, useContext, useEffect } from 'react';
import { Button, Form, type FormProps, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Header from './common/Header';
import { getEngagementRank, getFollowingRank, getUserLimits } from './api';
import '@farcaster/auth-kit/styles.css';
import { SignInButton, useSignIn } from '@farcaster/auth-kit';
import { LocalStorageContext } from '../App';
import UserLimit from './UserLimit';
import UserRankEngagement from './UserRankEngagement';

type FieldType = {
  username?: string;
};


const Home: React.FC = () => {
  const storageContext = useContext(LocalStorageContext)
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      try {
        const userFid = await chrome.storage.local.get("userFid");
        const username = await chrome.storage.local.get("username");
        const userLimit = await getUserLimits(userFid?.userFid as number);
        console.log(userFid, username);
        const followingRank = await getFollowingRank(username?.username)
        const engagementResult = await getEngagementRank(username?.username)
        storageContext?.setUserDetail({
          userFid: userFid?.userFid,
          username: username?.username
        })
        storageContext?.setFarcasterResult({
          followingRank,
          engagementResult
        })
        storageContext?.setUserLimit(userLimit)

      } catch (error) {
        console.log(error, 'error');
      }
    })()
  }, [])
  function handleSignOut() {
    storageContext?.setUserDetail({
      userFid: 0,
      username: ''
    })
    chrome.storage.local.clear()
  }
  function handleButtonClick() {
    navigate('/suggestions')
  }
  return (
    <>
      <Header title='Welcome to Warpster!' />
      {
        storageContext?.username?.length ? <div className=' text-2xl font-mono'>
          Hello, {storageContext.username}!.
        </div> :
          <SignInButton onSuccess={async ({ fid, username }) => {
            console.log(`Hello, ${username}! Your fid is ${fid}.`)
            const resp = await getUserLimits(fid as number);
            console.log(resp);
            const userLimit = await getUserLimits(fid as number);
            const followingRank = await getFollowingRank(username as string)
            const engagementResult = await getEngagementRank(username as string)
            storageContext?.setUserDetail({
              userFid: fid,
              username: username
            })
            storageContext?.setFarcasterResult({
              followingRank,
              engagementResult
            })
            storageContext?.setUserLimit(userLimit)
            chrome.storage.local.set({
              'userFid': fid,
              'username': username
            })
          }
          }
          />
      }
      {
        storageContext?.username && storageContext?.username?.length !== 0 && <button onClick={handleSignOut} className=' text-2xl outline-none border-none'>Sign Out</button>
      }
      {
        storageContext?.followingRank && <UserRankEngagement />
      }
      {
        storageContext?.userLimit && storageContext?.userLimit.length && <UserLimit />
      }
      <hr className='w-full mt-[12px] mb-[12px]' />
      <Button type='primary' onClick={handleButtonClick} className=' bg-[#1677ff]'>
        Suggested Handles
      </Button>
      <hr className='w-full mt-[12px] mb-[12px]' />
    </>
  )
};

export default Home;