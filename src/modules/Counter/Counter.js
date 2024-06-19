import { useCounterContext, CounterProvider } from './context';

const Counter = () => {
    const { counter, increment, decrement, reset } = useCounterContext();
  
    return <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Number from context: {counter}</p>
    </div>
};

const ProvidedCounter = ({ defaultValue }) => (
  <CounterProvider defaultValue={defaultValue}>
    <Counter />
  </CounterProvider>
);


export default ProvidedCounter;
