import { useState } from 'react';
import { Link } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1>value = {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <div style={{ display: 'flex', gap: 10 }}>
        <Link to="about">About</Link>
        <Link to="welcome">Welcome</Link>
      </div>
    </div>
  );
};
