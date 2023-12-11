import React, { useState } from 'react'
import './style.css'
const Task = ({ todo, deleteTask, completeTask }) => {

    return (
        <div className={`taskWrapper ${todo.complete ? 'completed' : ''}`}>
            <div className='taskText'>
                <input className='taskCheck' checked={todo.complete} type='radio' onClick={() => { completeTask(todo.id) }} />
                <p>{todo.text ? todo.text : 'Задача не установлена'}</p>
            </div>
            <img src='../../image/trash.png' onClick={() => deleteTask(todo.id)} alt='close' />
        </div>
    )
}

export default Task