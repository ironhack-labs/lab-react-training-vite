import React from 'react';

const BoxColor = ({r, g, b}) => {
    const validarValorColor = (valor) => {
        return Math.max(0, Math.min(valor, 255));
      };
    
      const rojo = validarValorColor(r);
      const verde = validarValorColor(g);
      const azul = validarValorColor(b);
    
      const estiloCaja = {
        backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`,
        width: '500px',
        height: '100px',
        border: '1px solid #000', // Opcional: Agregar un borde negro para una mejor visibilidad
      };
    
      return (
        <div style={estiloCaja}>
          
        </div>
      );
    };
    
    export default BoxColor;