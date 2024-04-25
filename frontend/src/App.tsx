import React from 'react';
import {Route, Routes} from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Application from "./Pages/Application/Application";
import Premium from "./Pages/Premium/Premium";
import Community from "./Pages/Community/Community";
import ServiceCenter from "./Pages/ServiceCenter/ServiceCenter";
import Header from "./Components/Common/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";


function App() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path="application" element={<Application/>}/>
                <Route path='premium' element={<Premium/>}/>
                <Route path='community' element={<Community/>}/>
                <Route path='servicecenter' element={<ServiceCenter/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element={<Signup/>}/>
            </Route>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

export default App;
