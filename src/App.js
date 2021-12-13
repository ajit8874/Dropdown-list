import logo from './logo.svg';
import './App.css';
import React from 'react'
import Dropdown from './Dropdown'
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Dropdown />
      {/*<form>
        <option>
          <select>Choose State</select>
          
          <select>Delhi</select>
          <select>Uttar Pradesh</select>
          <option>
          <select>Gorakhpur</select>
          <select>Lucknow</select>
          <select>Varanashi</select>
          </option>
          <select>Bihar</select>
          
        </option>
      </form>*/}
    </div>
  );
}

export default App;
