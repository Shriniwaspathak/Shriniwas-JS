import React, { useSelector, useState } from 'react';
import { Dispatch, useDispatch } from 'react-redux';
import { addTodo, removeTodo, deleteTodo } from '../actions/index';
import './todo.css';

const Todo = () => {
    const [inputdata, setInputdata] = useState('');
    const list = useSelector((state) =>state.todoReducer.list);
    const dispatch = useDispatch();
   
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                </div>
                <div className='addItems'>
                    <input type='text' placeholder='Add Items...' value={inputdata}
                        onChange={(event) => setInputdata(event.target.value)}
                    />
                    <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputdata), setInputdata(''))}></i>
                </div>
                <div className='showItem'>
                    {
                        list.map((elem) => {
                            return(
                            <div className='eachItem' key={elem.id}>
                                <h3>{elem.data}</h3>
                                <i className='fa fa-plus add-btn' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                            </div>
                         ) })
                    }

                </div>

            </div>
        </>
    )
}
export default Todo;