// 1) Import the React and ReactDOM liabraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const rootEl = document.getElementById('root');


// 3) Tell React to take control of that element
// We use ReactDOM liabrary for telling react to take control over the root element
const root = ReactDOM.createRoot(rootEl);

// 4) Create a component
function App() {
  const inputType = "number";

  // Customizing input using props
  return (
    <input type={inputType} min={5} style={{ border: "3px solid red" }} />
  )
}

// 5) Show the component on the screen
root.render(<App />);


