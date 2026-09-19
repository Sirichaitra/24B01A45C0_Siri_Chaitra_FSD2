import React from "react";

function App() {
  return (
    <div>
      <h1>Writing Markup with JSX</h1>

      <h2>Welcome to React</h2>

      <p>
        JSX allows us to write HTML-like markup inside JavaScript.
      </p>

      <div>
        <h3>Student Details</h3>

        <p>
          <strong>Name:</strong> Siri Chaitra
        </p>

        <p>
          <strong>Course:</strong> B.Tech
        </p>

        <p>
          <strong>Branch:</strong> AI & Data Science
        </p>
      </div>

      <ul>
        <li>Learn React</li>
        <li>Learn JSX</li>
        <li>Build Applications</li>
      </ul>

      <button>Click Me</button>
    </div>
  );
}

export default App;