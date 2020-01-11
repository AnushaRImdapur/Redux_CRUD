import React, { Component } from 'react'
import {connect} from "react-redux"
class EditComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            company:'',
            location:'',
            job:'',
            opening:'',
            salary:'',
            editing:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        var company=this.getCompany.value;
        var location=this.getLocation.value;
        var job=this.getjob.value;
        var opening=this.getOpening.value;
        var salary=this.getSalary.value;
        var editing=this.state.editing
        const data={
            company,
            location,
            job,
            opening,
            salary,
            editing
        }
        console.log("editcom",this.props.post.id)
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    //    this.reset() 
    }
    // reset(){
    //     this.getCompany.value='';
    //     this.getLocation.value='';
    //     this.getjob.value='';
    //     this.getOpening.value='';
    //     this.getSalary.value='';
    // }
    render() {
        console.log("datata",this.props.post.id)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label>Company</label><br />
                        <input type="text"  name="company"  ref={(input)=>this.getCompany = input}  value={this.state.company} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>Location</label><br />
                        <input type="text"  name="location"  ref={(input)=>this.getLocation = input} value={this.state.location} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>job</label><br />
                        <input type="text"  name="job" ref={(input)=>this.getjob = input} value={this.state.job} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>opening</label><br />
                        <input type="text" name="opening"  ref={(input)=>this.getOpening = input} value={this.state.opening} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>salary</label><br />
                        <input type="text" name="salary"  ref={(input)=>this.getSalary = input} value={this.state.salary} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }
}

export default connect()(EditComponent)