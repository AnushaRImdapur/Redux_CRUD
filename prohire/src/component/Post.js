import React from "react";

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:this.props.search
        }
    }
    render(){
        let user=this.props.post;
        let search=this.props.search;
        if(search.length > 0 ){
        user=user.filter(function(user){
            return user.company.toLowerCase().match(search);
        })
        }
    console.log("user",user)
        return(
          <>

           
           
            </>
        )
    }
}
export default Post;