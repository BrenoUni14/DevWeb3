import pokeball from './assets/images/pokeball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        <h1>LABORATÓRIO DE WEB DEVELOPMENT</h1>
        <p>
          Aula 1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
