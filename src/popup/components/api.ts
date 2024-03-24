import axios from "axios";

const PINATA_API_URL = 'https://hub.pinata.cloud/'
const LOCAL_HOST_API_URL = 'http://localhost:3000/'

export async function getUserLimits(fid: number) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${PINATA_API_URL}v1/storageLimitsByFid?fid=${fid}`,
    headers: {}
  };
  const result = await axios.request(config)
  return result.data.limits
}

export async function getFollowingRank(userName: string) {
  let data = JSON.stringify([
    userName
  ]);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${LOCAL_HOST_API_URL}api/following-rank`,
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    },
    data: data
  };

  const result = await axios.request(config)
  return result.data.result[0]
}
export async function getEngagementRank(userName: string) {
  let data = JSON.stringify([
    userName
  ]);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${LOCAL_HOST_API_URL}api/engagement-rank`,
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    },
    data: data
  };

  const result = await axios.request(config)
  return result.data.result[0]
}