import { useState } from 'react';
import './App.css';

import LazyCounterModule from './modules/Counter';

function App() {
  const [isCounterVisible, setCounterVisibility] = useState(false);

  const toggleCounter = () => setCounterVisibility(v => !v);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lazy Loaded Counter</h1>
        <button onClick={toggleCounter}>Toggle Counter</button>
        {isCounterVisible && <LazyCounterModule defaultValue={1}/>}
      </header>
    </div>
  );
}

export default App;
