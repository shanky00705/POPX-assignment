import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Account from "./components/Account";

import InfoContextObject from "./Context/InfoContext";

const App = () => {
  const [name, setName] = useState("Default Name");
  const [email, setEmail] = useState("default@gmail.com");

  const SetNameEmail = (userName, userEmail) => {
    setName(userName);
    setEmail(userEmail);
  };

  const contextValue = {
    name,
    email,
    SetNameEmail,
  };

  return (
    <InfoContextObject.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </InfoContextObject.Provider>
  );
};

export default App;