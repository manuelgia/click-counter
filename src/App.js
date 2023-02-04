import './App.css';
import Boton from "./componentes/boton"
import estilosBoton from "./hojas-de-estilo/boton.css"
import Contador from './componentes/contador';
import { useState } from "react";




function App() {

  const [numClicks, setNumClicks] = useState(0);
  
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <h1 className='freecodecamp-logo'><strong>Contador de Clicks</strong></h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>

        <Boton 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
          />
        <Boton 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
