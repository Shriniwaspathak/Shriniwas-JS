
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber} from './Action/index';

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div>

      <h1>Counter</h1>
      <h4>Using React and Redux</h4>
      <a className='minus' title='decrement' onClick={()=>dispatch(decNumber())}><span>-</span></a>
      <input name='quantity' type='text' className='quantity_input' value={myState} />
      <a className='plus' title='increment' onClick={()=>dispatch(incNumber())}>
      <span>+</span></a>


    </div>
  )
}
export default App;