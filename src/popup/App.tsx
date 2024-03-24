import React, { createContext, useState } from "react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Suggestions from "./components/Suggestions";

export const LocalStorageContext = createContext<
  | {
    userFid: number;
    username: string;
    setUserDetail: any;
    engagementResult: any;
    followingRank: any;
    setFarcasterResult: any;
    userLimit: any;
    setUserLimit: any;
    suggestionFollowing: any,
    suggestionEngagement: any,
    setSuggestionExtended: any
  }
  | undefined
>(undefined);

const App = () => {
  const [userDetail, setUserDetail] = useState({
    userFid: 0,
    username: ''
  })
  const [farcasterResult, setFarcasterResult] = useState<any>({
    followingRank:'',
    engagementResult: ''
  })
  const [userLimit, setUserLimit] = useState([])
  const [suggestionExtended, setSuggestionExtended] = useState<any>()
  return (
    <LocalStorageContext.Provider
      value={{ userFid: userDetail.userFid, username: userDetail.username, setUserDetail, followingRank: farcasterResult.followingRank, engagementResult:  farcasterResult.engagementResult, setFarcasterResult, userLimit, setUserLimit, setSuggestionExtended, suggestionFollowing: suggestionExtended?.suggestionFollowing, suggestionEngagement: suggestionExtended?.suggestionEngagement}}
    >
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/suggestions'} element={<Suggestions />} />
        </Routes>
      </Router>
    </LocalStorageContext.Provider>
  );
};

export default App;
