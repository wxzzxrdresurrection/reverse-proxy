
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const handleReset = () => {
    setNumClicks(0);
    console.log('Contador reiniciado');
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo} 
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='principal-container'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='Click'
          isClickButton={true} 
          handleClick={handleClick} />
        <Boton 
          texto='Reset' 
          isClickButton={false}
          handleClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
