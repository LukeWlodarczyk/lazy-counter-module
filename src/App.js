import { useState } from 'react';
import './App.css';

import LazyCounter from './modules/Counter';

function App() {
  const [isCounterVisible, setCounterVisibility] = useState(false);

  const toggleCounter = () => setCounterVisibility(v => !v);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lazy Loaded Counter</h1>
        <code className='App-code'>
          {`<LazyCounter defaultValue={1} />`}
        </code>
        <button className="App-btn" onClick={toggleCounter}>Toggle Counter</button>
        {isCounterVisible && <LazyCounter defaultValue={1} />}
      </header>
    </div>
  );
}

export default App;
