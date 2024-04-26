import React from "react";
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Header from "./Components/Common/Header";
import Application from "./pages/Application/Application";
import Premium from "./pages/Premium/Premium";
import Community from "./pages/Community/Community";
import ServiceCenter from "./pages/ServiceCenter/ServiceCenter";
import Login from "./pages/auth/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="application" element={<Application />} />
        <Route path="premium" element={<Premium />} />
        <Route path="community" element={<Community />} />
        <Route path="servicecenter" element={<ServiceCenter />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
