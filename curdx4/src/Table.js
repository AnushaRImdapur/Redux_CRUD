import React, { Component } from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import EditComponent from "./EditComponent"
 class Table extends Component {
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
    render() {
        console.log("table",this.props.posts)
         var newArr=this.props.posts
        return (
            <div>
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
                        {newArr.map(post=> post.editing ? <EditComponent  key={post.id} post={post} /> : <Post key={post.id} post={post} /> )}
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