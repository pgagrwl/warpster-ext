import React, { createContext, useEffect, useState } from "react";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [firstStep, setFirstStep] = useState(true);
  const [version, setVersion] = useState("");
  const [uuid, setUuid] = useState("");
  return (
        <Router>
          <Routes>
           <Route path={'/'} element={<div>Hello</div>}/>
          </Routes>
        </Router>
  );
};

export default App;
