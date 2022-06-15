import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../../contexts/UserContext";

import GlobalStyles from "../../assets/styles/globalStyles";

import RegisterPage from "../../pages/RegisterPage";

function App() {
  const [token, setToken] = useState(null);
  const value = { token, setToken };

  return (
    <UserContext.Provider value={value}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/sign-up" element={<RegisterPage />} />
          {/* TODO: Implement routes */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
