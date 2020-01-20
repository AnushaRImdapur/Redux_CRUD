import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home"
import Booking from "./component/Booking";
import Confirm from "./component/Confirm"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <Router>
        
        <Route  path="/" component={Home} />
        <Route path="/booking" component={Booking} />
        <Route path="/confirm/:id" component={Confirm} />
      </Router>
    )
  }
}
export default App;
