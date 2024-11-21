import React from 'react';
import './Admin.css'; 
import Footer from '../Footer/Footer';
import Home from '../home/Home';

const Admin = () => {
  return (
    <div>
      <Home/>
      <div className="admin-container">
      <div className="admin-content">
        <h4 className="admin-title">Panel de Administración</h4>
        <img className="cliente-image" src="https://cdn-icons-png.flaticon.com/512/12964/12964013.png" alt="Administrador" />
        <div className="admin-buttons">
          <button className="admin-button">Botón 1</button>
          <button className="admin-button">Botón 2</button>
        </div>
        <p className="admin-text">Texto de administración</p>
        
      </div>
    </div>
    <Footer/>

    </div>



    
  );
};

export default Admin;
