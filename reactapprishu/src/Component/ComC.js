import React, { useContext } from "react";
import { BioData } from "./ComA";

const ComC=({name})=>{
    const context=useContext(BioData);
    return  <h1>Hello Rishu {<br/>} {context}</h1>
           
}
export default ComC;