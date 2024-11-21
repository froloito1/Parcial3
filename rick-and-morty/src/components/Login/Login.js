import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Home from '../home/Home';
import Footer from '../Footer/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext); // Usar setUser para actualizar el contexto
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de validación de usuario
    if (
      (email === 'admin1@gmail.com' && password === 'uniCamacho1') ||
      (email === 'user1@gmail.com' && password === 'estudianteReact1')
    ) {
      // Establecer el usuario en el contexto
      setUser({ email }); // Aquí puedes almacenar más datos del usuario si es necesario
      navigate('/home'); // Redirigir al Dashboard
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <Home/>
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
