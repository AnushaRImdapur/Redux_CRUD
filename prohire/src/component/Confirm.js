import React from "react";
import { connect } from "react-redux";

class Confirm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params
        }
    }
   
    render(){
        var data={
            id:this.state.id
        }
        
        return(
            <div>
              {this.state.confirm} 
            </div>
        )
    }
}

export default  Confirm;