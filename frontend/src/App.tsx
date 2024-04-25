import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Home from './pages/Home';
import Login from './pages/auth/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
