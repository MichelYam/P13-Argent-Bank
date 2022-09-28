import React from 'react';

import './App.css';
//Components
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { User } from './pages/User/User';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<Navigate to={`/`} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
