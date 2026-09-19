import React, { Component } from "react";

// Function Component
function Header() {
  return <h1>React Components</h1>;
}

// Function Component
function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: Siri Chaitra</p>
      <p>Course: B.Tech</p>
    </div>
  );
}

// Class Component
class College extends Component {
  render() {
    return (
      <div>
        <h2>College Details</h2>
        <p>Branch: AI & Data Science</p>
        <p>Year: 3rd Year</p>
      </div>
    );
  }
}

// Function Component containing nested components
function App() {
  return (
    <div>
      <Header />
      <Student />
      <College />
    </div>
  );
}

export default App;