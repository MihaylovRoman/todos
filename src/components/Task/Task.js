import React, { useState } from 'react'
import './style.css'
const Task = ({ value, index, deleteTask }) => {

    const [active, setActive] = useState(false)

    return (
        <div className={`taskWrapper ${active ? 'completed' : ''}`}>
            <div className='taskText'>
                <input className='taskCheck' type='radio' onClick={() => setActive(!active)} />
                <p>{value ? value : 'Задача не установлена'}</p>
            </div>
            <img src='../../image/trash.png' onClick={() => deleteTask(index)} alt='qwe' />
        </div>
    )
}

export default Task