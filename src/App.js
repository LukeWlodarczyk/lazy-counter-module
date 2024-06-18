import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import { CounterProvider } from './context/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </header>
    </div>
  );
}

export default App;
