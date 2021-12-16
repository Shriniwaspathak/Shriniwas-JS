import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './App';

const CompB=()=>{

    const name=useContext(FirstName);
    const lname=useContext(LastName);
      return( <h1>My name is {name} {lname} </h1>);
      
};
export default CompB;