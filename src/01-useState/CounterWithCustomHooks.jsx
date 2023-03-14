import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter();


  return (
    <> 
    <h1>Counter with Hooks: { counter }</h1>
    <hr />

    <button className='btn btn-success' onClick={increment}>+1</button>
    <button className='btn btn-primary' onClick={decrement}>-1</button>
    <button className='btn btn-danger' onClick={reset}>Reset</button>
    </>        
  )
}
