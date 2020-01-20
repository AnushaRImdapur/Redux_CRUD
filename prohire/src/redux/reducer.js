import {BOOK_POST} from "./action";
import {CONFIRM_POST} from "./action";
import {data} from "../Data.js";
const intialState={
    data:data,
    confirm:[]
}
const rootreducer=(state=intialState,action)=>{
    console.log("act",state.data)
   switch(action.type){
       case BOOK_POST:
          return [...state.data];
        case CONFIRM_POST:
            console.log("state.data",action)
                return state.data.filter(post=>post.id !== action.id);
           default : 
           return state
   }
}
export default rootreducer;
