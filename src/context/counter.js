import { useReducer, createContext, use } from 'react';

const CounterContext = createContext(null);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT: 
      return state + 1
    case DECREMENT: 
      return state - 1
    case RESET: 
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

  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const reset = () => dispatch({ type: RESET });
  
  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
};

export const useCounterContext = () => use(CounterContext);
