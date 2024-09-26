import React from 'react';
import './HomePage.css';
//import Login from './loginpage/Login';
//import Signup from './signpage/Signup';
//import logo from '../assets/logo.png'; // Ajoute ton logo ici
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        {/*<img src={logo} alt="Logo" className="logo" />*/}
      </header>
      <div className="buttons-container">
        <Link to='./login'>
          <button className="login-button">Se connecter</button>
        </Link>
        <Link to='./signup'>
          <button className="signup-button">S'inscrire</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
