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

  // Rules for converting HTML to JSX
  // All prop names foloow camelCase capitalization
  // Number attributes use curly braces
  // Booleans of 'true can be written with just the property name
  // The 'class' attribute is written as 'className'
  // In-line styles are provided as objects
  return (
    <div className="wrapper">
      <textarea
        // readOnly is set true so directly writing property name
        readOnly
        maxLength={3}
        spellCheck={false}
        style={{ backgroundColor: "gray" }}
      />
    </div>
  )
}

// 5) Show the component on the screen
root.render(<App />);


