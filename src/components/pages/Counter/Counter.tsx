import { useCounter } from '../../../context/CounterContext';
import Button from '../../common/cta/Button';

const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div className=" text-center">
      <p className=" text-4xl m-2">Counter using Context API</p>
      <p className=" text-3xl m-10">{state.count}</p>
      <Button handleClick={() => dispatch({ type: 'INCREMENT' })} buttonText="Increment" className=" bg-primary m-3" />
      <Button handleClick={() => dispatch({ type: 'DECREMENT' })} buttonText="Decrement" className=" bg-secondary m-3" />
    </div>
  );
};

export default Counter;
