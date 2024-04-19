
const ProductError = ({ onClose }) => {
    return (
      <div>
        <p>Error al cargar el producto. Por favor, inténtalo de nuevo más tarde.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    );
  };
  
  export default ProductError;