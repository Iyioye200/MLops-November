import logo from './logo.svg';
import mypic from './mypic.jpg';
import './App.css';

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={mypic} className="App-logo" alt="logo" />
        <p>
           Edit app save to reload it again.
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
 

export default App ;
