import { useState } from 'react';

// Could be used instead of context api
const useCounter = (defaultValue) => {
  const [counter, setCounter] = useState(defaultValue);

  const increment = () => setCounter(counter => counter + 1);
  const decrement = () => setCounter(counter => counter - 1);
  const reset = () => setCounter(defaultValue);

  return { counter, increment, decrement, reset };
}

export default useCounter;
