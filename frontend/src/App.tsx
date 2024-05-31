import React from "react";
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Premium from "./Pages/application/Payment";
import Community from "./Pages/Community/Community";
import ServiceCenter from "./Pages/ServiceCenter/ServiceCenter";
import Home from "./Pages/home/Home";  // 수정된 부분

import Login from "./Pages/auth/Login";
import Agreement from "./Pages/auth/Agreement";
import Header from "./Components/common/Header";
import ScrollToTop from "./Components/common/ScrollToTop";
import Signup from "./Pages/auth/Signup";
import Application from "./Pages/application/Application";
import Payment from "./Pages/application/Payment";
import Cart from "./Pages/application/Cart";
import ApplicationDetails from "./Pages/application/ApplicationDetails"; // ScrollToTop 컴포넌트 임포트

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="application" element={<Application />} />
                    <Route path="applicationDetails" element={<ApplicationDetails
                    />} />
                    <Route path="Payment" element={<Payment />} />
                    <Route path="community" element={<Community />} />
                    <Route path="servicecenter" element={<ServiceCenter />} />
                    <Route path="cart" element={<Cart/>} />
                </Route>

                {/* 로그인, 회원가입 관련 */}
                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="agreement" element={<Agreement />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
