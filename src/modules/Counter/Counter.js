import { useCounterContext, CounterProvider } from './context';
import styles from  './Counter.module.css';

const Counter = ({ className }) => {
    const { counter, increment, decrement, reset } = useCounterContext();
  
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <button className={styles.button} onClick={increment}>Increment</button>
        <button className={styles.button} onClick={decrement}>Decrement</button>
        <button className={styles.button} onClick={reset}>Reset</button>
        <p className={styles.result}>Number: {counter}</p>
      </div>
    )
};

const ProvidedCounter = ({ defaultValue, className }) => (
  <CounterProvider defaultValue={defaultValue}>
    <Counter className={className} />
  </CounterProvider>
);


export default ProvidedCounter;
