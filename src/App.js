import { useEffect, useState, createContext, use } from 'react';
import logo from './logo.svg';
import './App.css';

export const NumberContext = createContext(1);

function Counter() {
  const counter = use(NumberContext);

  return <div>
    <p>Number from context: {counter}</p>
  </div>
}

function App() {
  const [counter, setCounter] = useState(0);

  console.log('run inside comp');

  useEffect(() => {
    console.log('run inside useEffect');
  }, []);

  const handleOnClick = () => setCounter(c => c + 1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleOnClick}>click {counter}</button>
        <NumberContext.Provider value={counter}>
          <Counter />
        </NumberContext.Provider>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
