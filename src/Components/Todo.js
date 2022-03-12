import React, { useState } from 'react';
import '../Components/Todo.css';
import ListComp from './ListComp';
import { Add } from '@mui/icons-material';


function Todo() {

    const [todo, setTodo] = useState("");
    const [addTodo, setAddTodo] = useState([]);

    const addlist =() =>{
        setAddTodo((value)=>{
            return [...value, todo]
        });
        setTodo(" ");
    };
    
    const itemEvent = (event) => {
        setTodo(event.target.value)
    };

    const removeTodo = (id) =>{
        setAddTodo((value)=>{
            return value.filter((val, index) => {
                return index !== id;
            });
        });
    };
return (
    <>
        <div className='toDo'>
            <div>
            <h2>React TODO App</h2>
            </div>
            <div className='searchBox'>
            <input type='text' 
                className='input'
                name='text'
                value={todo}
                placeholder='Enter your todos' 
                onChange = {itemEvent} />
            <button className='btn' onClick={addlist}><Add className='addBtn' /></button>
            </div>
            <ol>
                {
                    addTodo.map((val, index) => {
                        return (
                        <ListComp key={index} 
                        id={index}
                        text={val} 
                        onSelect={removeTodo}
                        />
                    );
                })}
            </ol>
            <h3>-By Pradyumna Gogoi</h3>
        </div>
    </>
  )
}

export default Todo