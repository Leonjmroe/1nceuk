import logo from './images/1nce-logo.png';
import underdevlogo from './images/under-dev-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={underdevlogo} className="under-dev-logo" alt="logo" />
        <a className="under-dev-text" href="https://www.instagram.com/1nce.uk/"> 1nce under development </a>
      </header>
    </div>
  );
}

export default App;
