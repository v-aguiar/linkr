import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../../contexts/UserContext";

import GlobalStyles from "../../assets/styles/globalStyles";

function App() {
  const [token, setToken] = useState(null);
  const value = { token, setToken };

  return (
    <UserContext.Provider value={value}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route /> {/* TODO: Implement routes */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
