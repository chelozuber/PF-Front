import React from 'react';

const NotFound = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Error: No se pudieron cargar los productos</h2>
      <p>Lo sentimos, no se pudieron cargar los productos en este momento. Por favor, inténtalo de nuevo más tarde.</p>
      <button onClick={handleReload}>Recargar la página</button>
    </div>
  );
};

export default NotFound;