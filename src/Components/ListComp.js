import { DeleteForever } from '@mui/icons-material';
import React from 'react';
import '../Components/ListComp.css';

function ListComp(props) {
return (
    <div className='listComp'>
        <li> {props.text} </li>
        <button 
        className='removeBtn'
        onClick={() =>{
            props.onSelect(props.id);
        }}><DeleteForever className='deleteBtn' /></button>
    </div>
  )
}

export default ListComp