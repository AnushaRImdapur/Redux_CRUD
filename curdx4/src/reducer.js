const reducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_LIST':
            return state.concat([action.data]);
        case 'DEL_LIST':
            return state.filter(post=>post.id !== action.id);
        case 'EDIT_LIST':
            console.log("dd",state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post))
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case 'UPDATE':
            return state.map((post)=>{
                console.log("dd2",action.id)
                if(post.id === action.id) {
                return {
                    ...post,
                    company:action.data.company,
                    location:action.data.location,
                    job:action.data.job,
                    opening:action.data.opening,
                    salary:action.data.salary,
                    editing: !post.editing
                }
                } else 
                return post;
            })
        default:
            return state
    }
}
export default reducer;

            