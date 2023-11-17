import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import ListaTarea from './components/ListaTarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-container">
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp Logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaTarea />
      </div>
    </div>
  );
}
export default App;
