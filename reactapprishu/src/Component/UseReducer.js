import React, { useReducer, useState } from "react";



const currentvalue=0;
const reducer=(state,action)=>{

    console.log(state,action);
    if(action.type==='Increment'){
        return state+1;
    }
    if(action.type==='Decrement'){
        return state-1;
    }
    return state;
}
const UseReducer=()=>{
    //const[count,setcount]=useState(0);

    const [state,dispatch]=useReducer(reducer,currentvalue);   

     return(
         <>
         <div>
         <h1>{state}</h1>
         <div>
         <button onClick={()=>dispatch({type:'Increment'})}>Inc</button><br/>
         <button onClick={()=>dispatch({type:'Decrement'})}>Dec</button>
         </div>
         </div>
         </>
     )
}
export default UseReducer;