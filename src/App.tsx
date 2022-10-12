import React from 'react';

import './App.css';
//Components
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/Login';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { User } from './pages/User/User';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from './components/Navigation/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path='/user' element={<User />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
