import React from 'react';
function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck={false}
        style={{ backgroundColor: "yellow" }}
      />
    </div>
  )
}

export default App;
