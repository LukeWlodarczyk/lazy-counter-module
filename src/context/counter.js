import { useState, createContext, use } from 'react';

const CounterContext = createContext(1);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter => counter + 1);
  const decrement = () => setCounter(counter => counter - 1);
  const reset = () => setCounter(0);
  
  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
};

export const useCounterContext = () => use(CounterContext);
