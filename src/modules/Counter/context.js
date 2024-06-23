import { useReducer, createContext, use } from 'react';

const CounterContext = createContext(null);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT: 
      return state + 1;
    case DECREMENT: 
      return state - 1;
    case RESET: 
      return action.payload;
    default: 
      return state;
  }
}

export const CounterProvider = ({ children, defaultValue }) => {  
//   Could be done with simple useState but lets try using context api with useReducer :D
//   const [counter, setCounter] = useState(defaultValue);

//   const increment = () => setCounter(counter => counter + 1);
//   const decrement = () => setCounter(counter => counter - 1);
//   const reset = () => setCounter(defaultValue);

  const [counter, dispatch] = useReducer(reducer, defaultValue);

  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const reset = () => dispatch({ type: RESET, payload: defaultValue });
  
  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
};

export const useCounterContext = () => use(CounterContext);
