import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello Manuel</h1>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement())}>- 1</button>
      <button onClick={() => dispatch(increment(5))}>+ 5</button>
      {isLogged ? <h2>You are not logged</h2> : <h2>You are logged</h2>}
    </div>
  );
}

export default App;
