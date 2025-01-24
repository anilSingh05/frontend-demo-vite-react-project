import './App.css';
import React, { useState } from 'react';

// Building a simple Counter App in React

// What data structures can be  used to store the state in React?
// In React, you can use the following data structures to store the state:
// 1. Primitive values: You can use primitive values such as strings, numbers, and booleans to store the state in React.
// 2. Arrays: You can use arrays to store the state in React. Arrays are used to store lists of items or data.
// 3. Objects: You can use objects to store the state in React. Objects are used to store key-value pairs of data.
// 4. Functions: You can use functions to store the state in React. Functions are used to store logic or behavior.
// 5. Classes: You can use classes to store the state in React. Classes are used to store complex data structures.

function App() {

    const [counter, setCounters] = useState([{ id: 1, value: 0 }]);

    const addCounter = () => {
        const newCounter = { id: counter.length + 1, value: 0 };
        setCounters([...counter, newCounter]);
    }

    const removeCounter = (id) => {
        const newCounter = counter.filter((c) => c.id !== id);
        setCounters(newCounter);
    }

    const handleIncrement = (id) => {
        const newCounter = counter.map((c) => {
            if (c.id === id) {
                return { ...c, value: c.value + 1 };
            }
            return c;
        });
        setCounters(newCounter);
    }

  return (
    <div className="App">
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counter.map((c) => (
          <li key={c.id}>
            Counter {c.id}: {c.value}{' '}
            <button onClick={() => {handleIncrement(c.id)}}>Increment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}   

export default App;