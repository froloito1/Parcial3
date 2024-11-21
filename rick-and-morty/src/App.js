import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AuthProvider from './context/AuthContext';
import Cliente from './components/Cliente/Cliente';
import Admin from './components/admin/Admin';

const App = () => {
  return (
    <AuthProvider> {/* Proveedor de autenticación */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
          <Route path="/home" element={<Dashboard />} /> {/* Ruta para Dashboard */}
          <Route path="/cliente" element={<Cliente />} /> {/* Ruta para Cliente */}
          <Route path="/" element={<Login />} /> {/* Ruta por defecto */}
          <Route path="/admin" element={<Admin />} /> {/* Ruta por defecto */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
