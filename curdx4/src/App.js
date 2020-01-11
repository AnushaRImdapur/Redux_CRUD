import React from 'react';
import Input from "./Input";
import Table from "./Table";
import Show from "./Show";
import Search from "./Search";
import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";
import './App.css';
class App extends React.Component{
  render(){
    return(
      <Router>
        <Link to="/">Table</Link>
        <Link to="/input">Input</Link>
        <Link to="/search">Search</Link>
       
        <Route exact path='/' component={Table} />
        <Route path="/input" component={Input} /> 
        <Route path="/show/:ids" component={Show} />
        <Route path="/search" component={Search} />
      </Router>
    )
  }
}
export default App;
