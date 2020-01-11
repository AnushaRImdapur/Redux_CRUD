import React, { Component } from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import EditComponent from "./EditComponent"
 class Table extends Component {
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }
    ascending = () => {
        var asc = this.props.posts.sort((a, b) => (a.salary - b.salary))
        this.setState({
            posts: asc
        })
        console.log("asc",this.props.posts)
    }
    descending = () => {
        var des = this.props.posts.sort((a, b) => (b.salary - a.salary))
        this.setState({
            posts: des
        })
    }
    handleChange=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    
    render() {
        // var newArr=this.props.posts
        let user=this.props.posts;
        let search=this.state.search.trim().toLowerCase();
        if(search.length > 0 ){
            user=user.filter(function(user){
                // return user.company.toLowerCase().match(search);
                if(user.company || user.job){
                    return (user.company || user.job).toLowerCase().match(search);
                }
                //  else if(user.job){
                //     return user.job.toLowerCase().match(search);
                // }
            })
        }
         
        return (
            <div>
                <div className="row">
                    <h4>Search from Company</h4>
                    <div className="col-5">
                        <input class="form-control" name="serach" value={this.state.search} type="text" placeholder="Default input" onChange={this.handleChange} />
                    </div>
                </div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Location</th>
                            <th scope="col">Job</th>
                            <th scope="col">Opening</th>
                            <th scope="col" >Salary<button onClick={this.ascending}>asc</button><button onClick={this.descending}>Dec</button></th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((post,index)=> post.editing ? <EditComponent  key={index} post={post} /> : <Post ids={index} key={index} post={post} /> )}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log("states",state)
    return{
        posts:state
    }
}
export default connect(mapStateToProps)(Table)