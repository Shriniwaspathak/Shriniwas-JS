import React, { useEffect, useState } from "react";
import './App.css'
import ComA from "./Component/ComA";
import Uncontrolled from "./Component/Uncontrolled";
import UseEffect from "./Component/UseEffect";
import UseReducer from "./Component/UseReducer";


const App=()=>{
  //let val ='Rishu Parasar';

//     const [myName,setmyName]=useState('Rishu App');
//   const changeName=()=>{
//    let val =myName;
//    (val==='Rishu App' )? setmyName('Rishu Parasar') : setmyName('Rishu App');
 
//   }
//   return(
//     <div>
// <h1> {myName} </h1>
// <button className='btn' onClick={changeName}>Click Here</button>
//     </div>
//   )

return(
  // <UseEffect/>
  //<Uncontrolled/>
  //<UseReducer/>
  <>
 <ComA/>
 
  </>
)
}

export default App;