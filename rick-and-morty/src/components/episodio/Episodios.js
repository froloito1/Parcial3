import React, { useState, useEffect } from 'react';

const Episodios = () => {
  const [episode, setEpisode] = useState(null);
  const [episodeId, setEpisodeId] = useState(1); // Comenzamos con el episodio 1

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then(response => response.json())
      .then(data => setEpisode(data));
  }, [episodeId]);

  if (!episode) return <p>Cargando...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{episode.name}</h2>
      <p><strong>Fecha de emisión:</strong> {episode.air_date}</p>
      <p><strong>Episodio:</strong> {episode.episode}</p>
      <p><strong>Cantidad de personajes:</strong> {episode.characters.length}</p>
      <p><strong>URL del episodio:</strong> <a href={episode.url} target="_blank" rel="noopener noreferrer">{episode.url}</a></p>
    </div>
  );
};

export default Episodios;
