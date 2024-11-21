import React, { useState } from 'react';
import Episodios from './Episodios';
import Boton from './Boton';

const NavegacionEpisodios = () => {
  const [episodeId, setEpisodeId] = useState(1);

  const handleNext = () => {
    setEpisodeId(episodeId + 1);
  };

  const handlePrevious = () => {
    setEpisodeId(episodeId > 1 ? episodeId - 1 : 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Episodios episodeId={episodeId} />
      <div>
        <Boton texto="Atrás" onClick={handlePrevious} />
        <Boton texto="Adelante" onClick={handleNext} />
      </div>
    </div>
  );
};

export default NavegacionEpisodios;
