import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div >
      <h1>Connexion</h1>
      <form>
        <input type="email" placeholder="Email"  />
        <input type="password" placeholder="Mot de passe"  />
        <button type="submit" >Se connecter</button>
      </form>
        <Link to='/signup'>
            <button >S'inscrire</button>
        </Link>
        
    </div>
  );
};



export default Login;
