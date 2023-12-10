import React, { useState } from 'react'
import './style.css'
const Task = ({ todo, deleteTask }) => {
    const [active, setActive] = useState(false)
    
    return (
        <div className={`taskWrapper ${active ? 'completed' : ''}`}>
            <div className='taskText'>
                <input className='taskCheck' type='radio' onClick={() => setActive(!active)
                } />
                <p>{todo ? todo : 'Задача не установлена'}</p>
            </div>
            <img src='../../image/trash.png' onClick={() => {deleteTask(todo.id)
            console.log(todo.id)}} alt='close' />
        </div>
    )
}

export default Task