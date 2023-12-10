import React from 'react'
import { useState, useEffect } from 'react'
import Task from '../Task/Task';
import './style.css'
const Day = () => {
    const [value, setValue] = useState('')
    const [task, setTask] = useState(localStorage.getItem('todos') ?
        JSON.parse(localStorage.getItem('todos')) : [])

    const onSubmitForm = (e) => {
        e.preventDefault()
        setTask([...task, value])
        setValue('')
    }

    const deleteTask = (id) => {
        setTask([...task.filter((todo) => todo.id !== id)])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify([...task]))
    }, [task])

    return (
        <div className="wrapperDay">
            <div className='taskManager'>
                <div className='Greetings'>
                    <h2>Доброе утро, username</h2>
                    <h2>Чем ты будешь заниматься сегодня?</h2>
                </div>
                <div>
                    <div className='calendarDay'>
                        <h3>SUN</h3>
                        <h2>10</h2>
                        <h3>December</h3>
                    </div>
                </div>
                <div className='taskWindow'>
                    {
                        task ? task.map((todo, index) => <Task todo={todo} key={index} deleteTask={deleteTask} />) : ''
                    }
                </div>
            </div>
            <form onSubmit={(e) => onSubmitForm(e)} className='formTodo'>
                <div className='inputValueWrapper'>
                    <img className='plusButton' src='../../image/plus.png' alt='plus' />
                    <input type='text' placeholder='Добавить задачу' value={value} onChange={(e) => setValue(e.target.value)} />
                    <img className='submitButton' onClick={onSubmitForm} src='../../image/sendTask.png' alt='enterTask' />
                </div>
            </form>
        </div>
    )
}

export default Day

