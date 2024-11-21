import React from 'react';
import './Cliente.css'; 
import Footer from '../Footer/Footer';
import Home from '../home/Home';

const Cliente = () => {
  return (
    <div>
      <Home/>
       <div className="cliente-container">
      <div className="cliente-content">
        <h4 className="cliente-title">Bienvenido Cliente</h4>
        <p className="cliente-description">Este es el área del cliente, donde puedes encontrar información relevante para ti.</p>
        <img className="cliente-image" src="https://cdn-icons-png.flaticon.com/512/2820/2820137.png" alt="Cliente" />
        </div>
    </div>
    <Footer/>
    </div>
   
  );
};

export default Cliente;
