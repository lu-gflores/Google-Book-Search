import React, {useState, useEffect, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get('/api/friends').then((res)=> setFriends(res.data));
  }, []);
  
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
