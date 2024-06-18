import { useReducer, createContext, use } from 'react';

const CounterContext = createContext(1);

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': 
      return state + 1
    case 'decrement': 
      return state - 1
    case 'reset': 
      return 0
    default: 
      return state;
  }
}

export const CounterProvider = ({ children }) => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => setCounter(counter => counter + 1);
//   const decrement = () => setCounter(counter => counter - 1);
//   const reset = () => setCounter(0);

  const [counter, dispatch] = useReducer(reducer, 0);

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const reset = () => dispatch({ type: 'reset' });
  
  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
};

export const useCounterContext = () => use(CounterContext);
