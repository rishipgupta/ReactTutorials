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

  let message = "Default Message";
  // computation for updating message
  if (Math.random() > 0.5) {
    message = "Updated Message";
  }
  return (
    <h1>{message}</h1>
  )
}

// 5) Show the component on the screen
root.render(<App />);


