import React from 'react';

const Prevent = () => {

  const [miEstado, setMiEstado] = React.useState('')

  const handleKeyDown = (event) => {
    if(event.key === '0'){
      event.preventDefault();
      console.log('Estoy apretando el 0')
    }
    console.log(event.key)
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => console.log(`Contenido: ${e.target.value}`)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Prevent;