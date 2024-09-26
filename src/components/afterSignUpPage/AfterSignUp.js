import React, { useState } from 'react';
import logo from '../../assets/logo.png';  
import fond from '../../assets/fond.png';
import droite from '../../assets/droite.png';
import gauche from '../../assets/gauche.png';
import { collection , addDoc} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './AfterSignUp.css';

const AfterSignUp = () => {
  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [temps, setTemps] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Ajouter les données dans Firestore
        await addDoc(collection(db, 'trajet'), {
          depart,
          destination,
          temps,
        });

        console.log("Données enregistrées avec succès !");
      } catch (error) {
        console.error("Erreur lors de l'enregistrement : ", error);
      }
    
    console.log({ depart, destination, temps });
  };

  return (
    <div className="page-container" >
      
      <header className="header-bar">
        <img src={logo} alt="GoTrajet Logo" className="logo" />

        <div className="icons-container"> 
        <img src={gauche} alt="Publier un trajet"className="icon" ></img>
        <p className='publish-text'> Publier un trajet </p>
        <img src={droite} alt="profil" className='icon' onClick={() => console('voir profil')} ></img>

        </div>
        </header>

        

       

      {/* Phrase incitative */}
      <div class ='content-container'></div> 
      <p className="intro-text">
        Prêt à partager le chemin et à ajouter du fun à votre retour ?
      </p>

      {/* Formulaire de recherche */}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="depart">Départ</label>
          <input
            type="text"
            id="depart"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            placeholder="Ex : Campus Lyon"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Ex : Gare Part-Dieu"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="temps">Quand</label>
          <input
            type="datetime-local"
            id="temps"
            value={temps}
            onChange={(e) => setTemps(e.target.value)}
            required
          />
        </div>

        {/* Bouton de recherche */}
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default AfterSignUp;
