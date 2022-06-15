import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../../contexts/UserContext";

import GlobalStyles from "../../assets/styles/globalStyles";

import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";

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
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
