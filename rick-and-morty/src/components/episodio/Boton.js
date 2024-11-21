import React from 'react';

const Boton = ({ texto, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        backgroundColor: '#008CBA',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
      }}
    >
      {texto}
    </button>
  );
};

export default Boton;
