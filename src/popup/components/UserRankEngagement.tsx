import React, { useContext } from 'react'
import { LocalStorageContext } from '../App'

export default function UserRankEngagement() {
    const storageContext = useContext(LocalStorageContext)

    return (
        <div className=' mt-[12px] mb-[12px]'>
            <hr className="w-full" />
            <div className=' text-lg font-mono'>
                <div>
                    <label htmlFor="following-rank">Following Rank</label>
                    <div className=' font-semibold'>
                        {
                            storageContext?.followingRank.rank
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="engagement-rank"> Engagement Rank</label>
                    <div className=' font-semibold'>
                        {
                            storageContext?.engagementResult.rank
                        }
                    </div>
                </div>
            </div>
            <div className='  text-[11px] text-[#f3ea62] font-mono font-semibold'>
                Source: Karma3Labs
            </div>
        </div>
    )
}
