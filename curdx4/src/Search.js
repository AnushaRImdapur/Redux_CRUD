import React from "react";
import {connect} from "react-redux";
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    render(){
       
    let user=this.props.post;
    let search=this.state.search.trim().toLowerCase();
    if(search.length > 0 ){
        user=user.filter(function(user){
            return user.company.toLowerCase().match(search);
        })
    }
    console.log("user",user)
        const newArr=user.map(item=>{
            return(
                <tr>
                    <td>{item.company}</td>
                    <td>{item.location}</td>
                    <td>{item.job}</td>
                    <td>{item.opening}</td>
                    <td>{item.salary}</td>
                </tr>
            )
        })
        return(
            <div>
                <div className="row">
                    <div className="col-5">
                        <input class="form-control" name="serach" value={this.state.search} type="text" placeholder="Default input" onChange={this.handleChange} />
                    </div>
                </div>
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Location</th>
                        <th scope="col">Job</th>
                        <th scope="col">Opening</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {newArr}
                    
                </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        post:state
    }
}
export default connect(mapStateToProps)(Search);