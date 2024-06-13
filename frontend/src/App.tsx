import React from "react";
import { Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Community from "./Pages/Community/Community";
import ServiceCenter from "./Pages/ServiceCenter/ServiceCenter";
import Home from "./Pages/home/Home";

import Login from "./Pages/auth/Login";
import Agreement from "./Pages/auth/Agreement";
import Header from "./Components/common/Header";
import ScrollToTop from "./Components/common/ScrollToTop";
import Signup from "./Pages/auth/Signup";
import Application from "./Pages/application/Application";
import ApplicationDetail from "./Pages/application/ApplicationDetail";
import ImgApplication from "./Pages/application/ImgApplication";
import Cart from "./Pages/application/Cart";
import { AuthProvider } from "./Context";
import Payment from "./Pages/application/Payment";
import ProtectedRoute from "./Components/route/ProtectedRoute";
import RestrictedRoute from "./Components/route/RestrictedRoute";

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="application" element={<Application />} />
          <Route path="applicationDetail" element={<ApplicationDetail />} />
          <Route path="imgApplication" element={<ImgApplication />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="community" element={<Community />} />
          <Route path="servicecenter" element={<ServiceCenter />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/auth" element={<RestrictedRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="agreement" element={<Agreement />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
