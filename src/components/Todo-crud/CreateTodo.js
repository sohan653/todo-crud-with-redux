import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/state/TodoSlice';
import { deleteAlert, updateAlert } from '../sweetAlert';

const CreateTodo = () => {
    const todo=useSelector(x=>x.todo.value)
    console.log(todo)
    const dispatch=useDispatch()
    const taskName=useRef()
    
    return (
        <div>
            <input ref={taskName} type="text" name="" id="" placeholder='Task Name' />
            <button onClick={()=> dispatch(addTodo(taskName.current.value))}>insert</button>

            {todo.map((x,i)=> <>
            <h1>{x}</h1>
            <button onClick={()=>deleteAlert(i)}>delete</button>
            <button onClick={()=>updateAlert(i,x)}>update</button>
            
            </> )}
        </div>
    );
};

export default CreateTodo;