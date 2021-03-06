import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../../contexts/UserContext";

import GlobalStyles from "../../assets/styles/globalStyles";

import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import TimelinePage from "../../pages/TimelinePage";
import UserPage from "../../pages/UserPage";
import HashtagPage from "../../pages/HashtagPage";

function App() {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );
  const value = { userInfo, setUserInfo };

  return (
    <UserContext.Provider value={value}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
