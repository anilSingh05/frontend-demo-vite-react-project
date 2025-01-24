import './App.css'
import React, { useState } from 'react';

// useState is a hook that allows you to add state to functional components in React.
// useState returns an array with two elements: the current state value and a function to update the state.
// You can use array destructuring to assign names to the state value and the state update function.
// use of multiple states in a single component in React.
// You can use multiple useState hooks to add multiple states to a single component.

// Updater function in useState in React
// The updater function in useState allows you to update state based on the current state.
// The updater function receives the current state value as an argument and returns the new state value.
// You can use the updater function to update state based on the current state value.

// State updates are asynchronous in React
// State updates are asynchronous in React, which means that React batches multiple state updates together.
// State updates are batched together to improve performance and avoid unnecessary re-renders.
// State updates are scheduled by React and may not be applied immediately.
// How React batches state updates together?
// React batches state updates together by queuing the state updates and applying them in a single batch.
// You can use the updater function in useState to update state based on the current state value.


function App() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const incrementCounter = () => setCount(count + step);
    const decrementCounter = () => setCount(count - step);

    // Updater function in useState in React
    const counterUpdater = () => {
        setCount((prevCount) => prevCount + 2);
        setStep((s) => s + 10);
    }

    return (
        <div className="app-container">
            <h1>Counter App: {count}</h1>
            <input text="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}>
                </input>
            <button 
                onClick={incrementCounter}>Increment</button>
            <button 
                onClick={decrementCounter}>Decrement</button>
            <button 
                onClick={counterUpdater}>+2</button>
        </div>
    );
    }

export default App;

//  What use of State in react? 
// State is a built-in feature in React that allows you to store component-specific data.
// State is used to store data that can change over time, such as user input, API responses, or timer intervals.
// State is used to manage the data that changes in a component and to trigger re-renders when the data changes.
// State is used to store data that is specific to a component and not shared with other components.

// How to use State in React?
// You can use the useState hook in React to add state to functional components.
// The useState hook returns an array with two elements: the current state value and a function to update the state.
// You can use array destructuring to assign names to the state value and the state update function.
// You can use the state value in JSX by wrapping it in curly braces.

// How to update State in React?
// You can update state in React by calling the state update function returned by the useState hook.
// The state update function takes the new state value as an argument and updates the state.
// You can update state based on the current state by passing a function to the state update function.
// The function receives the current state value as an argument and returns the new state value.

// How to use State in React to manage form input?
// You can use state in React to manage form input by storing the input value in state.
// You can create a state variable to store the input value and update it when the input changes.
// You can use the value attribute to bind the input value to the state variable.
// You can use the onChange event to update the state variable when the input value changes.

// How to use State in React to manage API data?
// You can use state in React to manage API data by storing the API response in state.
// You can create a state variable to store the API data and update it when the API response is received.
// You can use the useEffect hook to fetch the API data and update the state variable.
// You can use the state value in JSX to render the API data.


// How to use State in React to manage timer intervals?
// You can use state in React to manage timer intervals by storing the timer value in state.
// You can create a state variable to store the timer value and update it when the timer interval elapses.
// You can use the useEffect hook to start the timer interval and update the state variable.
// You can use the state value in JSX to render the timer value.

// Why not just use variables instead of State in React?
// Using state in React allows you to manage component-specific data that can change over time.
// State provides a way to store data that triggers re-renders when it changes.
// State allows you to update the component's data without re-rendering the entire component.