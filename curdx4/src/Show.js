import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:''
        }
        
    
    }
    componentDidMount(){
      let id = this.props.match.params
      const newArr=this.props.post.filter((item,index)=>index !== id)    
      this.setState({
          show:newArr
      })
    }
    render(){
        // console.log("eeee",this.state.show)
        return(
            <div>
                 <div>
                  <h1>Comapany Name:{this.state.show.company}</h1>
                <h3>Loaction of The Company:{this.state.show.location}</h3>
                <h3>Name of the Jobs:{this.state.show.job}</h3>
                <h3>Number of the Openings:{this.state.show.opening}</h3>
                <button><Link to="/">Back to Table</Link></button>
              </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        post:state
    }
}
export default connect(mapStateToProps)(Show);