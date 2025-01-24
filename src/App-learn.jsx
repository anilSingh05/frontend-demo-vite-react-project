import { useState } from 'react'
import './App.css'

  const name = 'Anil';
  const imageUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  const isLoggedIn = true;

  // if(isLoggedIn) {
  //   return (<h1>Welcome, {name}</h1>)
  // }else {
  //   return (<h1>Please log in</h1>)
  // }

  // write above code in turnary operator
  const  element = isLoggedIn ? <h1>Welcome, {name}</h1> : <h1>Please log in</h1>

  // Example of how short-circuit evaluation works in JavaScript?  
  // Short-circuit evaluation is a way to write conditional statements in a more concise way.

  // In JavaScript, the && operator returns the first falsy value it encounters, 
  // or the last value if none are falsy.

  const messages = ['Hello', 'Goodbye', 'Thank you', 'You are welcome'];

  // jsx function to render messages
  //  How JSX functions work in React? 
  // JSX functions are functions that return JSX elements.

  // In React, you can define JSX functions to create reusable components.
  // JSX functions can take props as arguments and return JSX elements.
  // JSX functions are a way to create reusable components in React.
  function renderMessages(name) {
    return <h1>Hello, {name}</h1>
  }

  function  greetings(isMorning) {
    return isMorning ? <h2>Good Morning</h2> : <h2>Good Evening</h2>
  }

  function  AlertBox(message) {
    return <div className="alert">{message}</div>
  }

  function showAlert(condition,  message){
    if(condition) {
      return AlertBox(message);
    }else {
      return null;
    }
  }

function App() {
  
  const now = new Date();
  const isMorning =  now.getHours() < 12;

  //  How to use JSX functions in React?
  // You can use JSX functions in React by calling them like regular functions.
  // JSX functions are functions that return JSX elements.

  return (
    <div>
      {renderMessages('Anil')}
      {renderMessages('John')}
      {renderMessages('Amit')}

      {greetings(isMorning)}

      {showAlert(true, 'This is an alert message')}
      
    </div>
  )

}

export default App


  // return (
  //   // <div>
  //   //   {element}
  //   //   {messages.length > 0 && <h2>You have {messages.length} new messages</h2>}
  //   // </div>
  // )

 // return (
    //  In JSX, we can use JavaScript expressions by wrapping them in curly braces, like {expression}
    // {6+7}
    //  How JSX converts to JavaScript?  Babel is a JavaScript compiler that converts JSX into JavaScript.
    // Babel compiles JSX into React.createElement() calls.
   // <div>
      {/* <h1 className="heading">Hello World!</h1>
      <button style={{backgroundColor:  'blue', color: 'white'}} 
        onClick={() => alert('Hello, ' + name)}>Say Hello</button>
        <div>
            <img src={imageUrl} alt="Google Logo" />
        </div> */}
   // </div>
 //)


//  There shouldd be wrapped into one parent element to return the element
//  in JSX we should use className instead of class
//  Some tags should be self-closing,  like  <img> <input> <br> <hr> <meta> <link> <area> <base> <col> <embed> <param> <source> <track> <wbr>
//  In JSX, we can use JavaScript expressions by wrapping them in curly braces, like {expression}
// {6+7}
// you can embed any JavaScript expression in JSX by wrapping it in curly braces, like {expression}
// JSX is not HTML, it's a syntax extension for JavaScript. 
// It's a syntax that looks similar to HTML but has some key differences.
// JSX uses camelCase for attribute names, like className instead of class
//  How JSX converts to JavaScript?  Babel is a JavaScript compiler that converts JSX into JavaScript.
// Babel compiles JSX into React.createElement() calls.
// what is inline code for JSX {expression}? 
// {expression} is an inline code for JSX. It allows you to embed any JavaScript expression 
// in JSX by wrapping it in curly braces.
// What is the difference between JSX and HTML? JSX is not HTML. JSX is a syntax extension for JavaScript.
// class is  a reserved keyword in JavaScript, so we use className instead of class in JSX.
// And class  inside <h1> tag  is a  HTML attribute, so we use className instead of class in JSX.