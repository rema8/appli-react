import React from 'react';
import {Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div >
      <h1>Inscription</h1>
      <form>
        <input type="text" placeholder="Nom"  />
        <input type="email" placeholder="Email"  />
        <input type="password" placeholder="Mot de passe"  />
        <button type="submit" >S'inscrire</button>
      </form>

      <Link to='/aftersignup'>
      <button >S'inscrire</button>
      </Link>
    </div>
    
  );
  
};



export default Signup;
