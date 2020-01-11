import React, { Component } from 'react'
import {connect} from "react-redux"
 class Post extends Component {
     
    render() {
        console.log(this.props.post.company)
        return (
            <tr key={this.props.post.id}>
                <td>{this.props.post.company}</td>
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