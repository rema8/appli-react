import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Login from './components/loginpage/Login';
import Signup from './components/signpage/Signup';
import AfterSignUp from './components/afterSignUpPage/AfterSignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aftersignup" element={<AfterSignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;

