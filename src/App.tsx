import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import { Header } from './components/Header/Index';
import { Footer } from './components/Footer/Index';

import Home from './pages/Home/Index';
import SignIn from './pages/Auth/Login';
import SignUp from './pages/Auth/Register';
import { User } from './pages/User/Index';
import ProtectedRoute from "./pages/PrivateRoute";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/user' element={<User />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
