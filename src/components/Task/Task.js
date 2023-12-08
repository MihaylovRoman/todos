import React, { useState } from 'react'
import './style.css'
const Task = ({ value, index, deleteTask }) => {

    const [active, setActive] = useState(false)
    
    return (
        <div className={`taskWrapper ${active ? 'completed' : ''}`}>
            <input className='taskCheck' type='checkbox' onClick={() => setActive(!active)}/>
            <p>{value ? value : 'The task has not been set'}</p>
            <img src='../../image/trash.png' onClick={() => deleteTask(index)} alt='qwe' />
        </div>
    )
}

export default Task