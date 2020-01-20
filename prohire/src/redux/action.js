export const BOOK_POST='BOOK_POST';
export const CONFIRM_POST='CONFIRM_POST';

export const bookPost=payload=>{
    return{
        type:'BOOK_POST',
        payload
    }
}
export const confirmPost=id=>{
   
    return{
        type:'CONFIRM_POST',
        id
    }
}
export default {bookPost,confirmPost}