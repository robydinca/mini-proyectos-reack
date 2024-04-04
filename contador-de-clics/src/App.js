import './App.css';
import freecodeCampLogo from './imagenes/freecodecamplogo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState, useEffect } from 'react';

function App() {
  const initialNumClics = parseInt(localStorage.getItem('numClics')) || 0;
  const [numClics, setNumClics] = useState(initialNumClics);

  const manejarClic = () => {
    const newNumClics = numClics + 1;
    setNumClics(newNumClics);
    localStorage.setItem('numClics', newNumClics.toString());
  };

  const reiniciarContador = () => {
    setNumClics(0);
    localStorage.setItem('numClics', '0');
  };

  useEffect(() => {
    // Este efecto se ejecuta solo cuando el componente se monta
    // Verifica si hay un valor guardado en el localStorage y lo establece como el estado inicial.
    const storedNumClics = parseInt(localStorage.getItem('numClics'));
    if (!isNaN(storedNumClics)) {
      setNumClics(storedNumClics);
    }
  }, []);

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodeCampLogo}
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
