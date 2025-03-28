import React, { memo } from 'react';
import MiComp from '../miComp/miComp';

const Contador = ({ title, cont, setCont }) => {

//   console.log(`Renderizando ${title}`);

  return (
    <div>
      <p>{title}</p>
      <p>Contador: {cont}</p>
      <button onClick={() => setCont(cont + 1)}>+</button>
      <MiComp title={title} dato={true}/>
    </div>
  );
};

// Usamos memo para optimizar el componente
export default Contador;