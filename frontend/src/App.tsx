import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Home from './Pages/Home';
import About from "./Pages/About";
import Hi from "./Pages/Hi";
import Op from "./Pages/Op";

function App() {
    return (
        <Routes>
            <Route element={<Home/>}>
                <Route path="about" element={<About/>}/>
                <Route path='hi' element={<Hi/>}/>
            </Route>
            <Route path="/" element={<Op/>}/>
        </Routes>
    );
}

export default App;
