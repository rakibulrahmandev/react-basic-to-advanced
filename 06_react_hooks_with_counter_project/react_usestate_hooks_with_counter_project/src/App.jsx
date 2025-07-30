import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    if (counter < 20) {
      setCounter((counter) => counter + 1);
    };
  };

  const decreaseCount = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    };
  };

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <h2>Counter Update: {counter}</h2>
      </div>
      <button onClick={increaseCount}>Increase Counter</button>
      <button onClick={decreaseCount}>Decrease Counter</button>
    </div>
  );
};

export default App;