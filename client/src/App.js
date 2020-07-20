import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Search from './pages/Search'
import Saved from './pages/Saved'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
  
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Header/>
      
      <Route path="/" component={Search}/>
      <Route path="/search" component={Search}/>
      <Route path="/saved" component={Saved}/>
      </div>
    </Router>
    
  );
}


export default App;
