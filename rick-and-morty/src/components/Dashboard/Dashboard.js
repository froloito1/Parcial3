import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Home from '../home/Home';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  const { user } = useContext(AuthContext);  // Obtén el contexto de usuario
  const navigate = useNavigate();  // Función para redirigir
  const [episodes, setEpisodes] = useState([]);  // Estado para los episodios
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);  // Estado para el índice del episodio actual

  // useEffect para obtener episodios
  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      setEpisodes(data.results);  // Guarda los episodios en el estado
    };

    fetchEpisodes();  // Llamada a la API cuando el componente se monta
  }, []);  // El useEffect solo se ejecuta al montar el componente

  // Redirigir si no hay usuario autenticado
  if (!user) {
    navigate('/login');
    return null;  // No renderiza nada mientras redirige
  }

  // Función para ir al siguiente episodio
  const nextEpisode = () => {
    if (currentEpisodeIndex < episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  };

  // Función para ir al episodio anterior
  const prevEpisode = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  };

  // Obtener el episodio actual basado en el índice
  const episode = episodes[currentEpisodeIndex];

  return (
    <div>
      <Home/>
    <div>
      <p>Bienvenido, {user.email}</p>
      <button onClick={() => navigate('/login')}>Cerrar sesión</button>

      <h2>Se mostraran los Episodios de Rick and Morty. Espero te gusten :)</h2>

      {episode ? (
        <div>
          <h3>{episode.name}</h3>
          <p><strong>Fecha de emisión:</strong> {episode.air_date}</p>
          <p><strong>Identificador:</strong> {episode.episode}</p>
          <p><strong>Cantidad de personajes:</strong> {episode.characters.length}</p>
          <p><strong>URL del episodio:</strong> <a href={episode.url} target="_blank" rel="noopener noreferrer">Ver episodio</a></p>
        </div>
      ) : (
        <p>Cargando episodios...</p>
      )}

      <div>
        <button onClick={prevEpisode} disabled={currentEpisodeIndex === 0}>Anterior</button>
        <button onClick={nextEpisode} disabled={currentEpisodeIndex === episodes.length - 1}>Siguiente</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Dashboard;
