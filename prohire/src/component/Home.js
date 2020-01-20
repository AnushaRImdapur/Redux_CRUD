import React from "react";
// import Post from "./Post";
// import {Link} from "react-router-dom";
import {confirmPost} from "../redux/action"
import { connect } from "react-redux";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           search:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=(id)=>{
        console.log(id)
        
       this.props.dispatch({type:'CONFIRM_POST',id:id})
    }
    render() {
        let user=this.props.post;
       
          let search=this.state.search.trim().toLowerCase();
       
        if(search.length > 0 ){
        user=user.filter(function(user){
            return user.type.toLowerCase().match(search);
        })
        }
     
         var newArr = user.map(post =>{
            return(
                <tr>
                <td>
                    <img src={post.img} alt="" /></td>
                    <td style={{marginTop:"30px"}} >{post.type}</td>
                    <td>{post.seat}</td>
                    <td>{post.color}</td>
                   
                    <td><button onClick={()=>this.handleClick(post.id)}>Book</button></td>
                </tr>
            )
        })
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">From:</label><br />
                        <input type="date" class="form-control" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">To:</label> <br />
                        <input type="date" class="form-control" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <hr />
                <h6 >Search</h6>
                <input type="text" className="form-control" value={this.state.search} name="search" onChange={this.handleChange} palceholder="search" />
                <br />
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            
                            <th scope="col">Product</th>
                            <th scope="col">Type</th>
                            <th scope="col">No. of seats</th>
                            <th scope="col">Color</th>
                            <th scope="col">Booking</th>
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
const mapStateToProps = state => {
    return {
        post: state.data
    }
}

export default connect(mapStateToProps)(Home);