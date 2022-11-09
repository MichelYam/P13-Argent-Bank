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
import Error from './pages/NotFound';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/user' element={<User />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
