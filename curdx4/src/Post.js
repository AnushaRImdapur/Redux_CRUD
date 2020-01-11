import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux"
 class Post extends Component {
     
    render() {
        console.log("ee",this.props.ids)
        return (
            <tr key={this.props.post.id}>
                <td><Link to={`/show/${this.props.ids}`}>{this.props.post.company}</Link></td>
                <td>{this.props.post.location}</td>
                <td>{this.props.post.job}</td>
                <td>{this.props.post.opening}</td>
                <td>{this.props.post.salary}</td>
                <td><button onClick={()=>this.props.dispatch({type:'EDIT_LIST',id:this.props.post.id})} >Link</button></td>
                <td><button onClick={()=>this.props.dispatch({type:'DEL_LIST',id:this.props.post.id})}>Link</button></td>
            </tr>
        )
    }
}
export default connect()(Post)