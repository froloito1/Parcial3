import React, { useState, useEffect } from 'react';
import Boton from './Boton'; 

const Episodios = () => {
  const [episodio, setEpisodio] = useState(null);  // Estado para almacenar la información del episodio
  const [episodioId, setEpisodioId] = useState(1); // Estado para almacenar el ID del episodio actual

  // useEffect para cargar los detalles del episodio al cambiar el ID
  useEffect(() => {
    const fetchEpisodio = async () => {
      const respuesta = await fetch(`https://rickandmortyapi.com/api/episode/${episodioId}`);
      const data = await respuesta.json();
      setEpisodio(data); // Actualizamos el estado con los detalles del episodio
    };
    
    fetchEpisodio();
  }, [episodioId]); // Se ejecutará cada vez que cambie el episodioId

  // Funciones para avanzar y retroceder entre episodios
  const siguienteEpisodio = () => {
    setEpisodioId(prevId => prevId + 1); // Avanza al siguiente episodio
  };

  const anteriorEpisodio = () => {
    setEpisodioId(prevId => (prevId > 1 ? prevId - 1 : 1)); // Retrocede al episodio anterior, sin ir a un número negativo
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Detalles del Episodio</h1>
      {episodio ? (
        <div>
          <h2>{episodio.name}</h2>
          <p><strong>Fecha de emisión:</strong> {episodio.air_date}</p>
          <p><strong>Identificador:</strong> {episodio.id}</p>
          <p><strong>Cantidad de personajes:</strong> {episodio.characters.length}</p>
          <p><strong>URL del episodio:</strong> <a href={episodio.url} target="_blank" rel="noopener noreferrer">{episodio.url}</a></p>
          
          <div>
            <Boton onClick={anteriorEpisodio} texto="Anterior" />
            <Boton onClick={siguienteEpisodio} texto="Siguiente" />
          </div>
        </div>
      ) : (
        <p>Cargando episodio...</p>
      )}
    </div>
  );
};

export default Episodios;
