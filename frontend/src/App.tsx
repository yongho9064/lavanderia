import React from "react";
import {Route, Routes} from "react-router-dom";
import "tailwindcss/tailwind.css";
import Application from "./Pages/Application/Application";
import Premium from "./Pages/Premium/Premium";
import Community from "./Pages/Community/Community";
import ServiceCenter from "./Pages/ServiceCenter/ServiceCenter";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import {Signup} from "./Pages/auth/Signup";
import Header from "./Components/Common/Header";

function App() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path="application" element={<Application/>}/>
                <Route path="premium" element={<Premium/>}/>
                <Route path="community" element={<Community/>}/>
                <Route path="servicecenter" element={<ServiceCenter/>}/>
            </Route>
            <Route path="/" element={<Home/>}/>

            {/* 로그인, 회원가입 관련 */}
            <Route path="/auth">
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
            </Route>
        </Routes>
    );
}

export default App;
