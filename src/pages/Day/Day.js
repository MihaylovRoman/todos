import React from 'react'
import { useState, useEffect } from 'react'
import Task from '../../components/Task/Task';
import './style.css'
const Day = () => {
    let date = new Date()
    const day = date.getDay()
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    const months = ["Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
    
    const [value, setValue] = useState('')
    const [task, setTask] = useState(localStorage.getItem('todos') ?
        JSON.parse(localStorage.getItem('todos')) : [])

    const onSubmitForm = (e) => {
        e.preventDefault()
        const newTask = {
            id: Math.random().toString(36).substring(2, 9),
            text: value,
            complete: false
        }
        setTask([...task, newTask])
        setValue('')
    }

    const completeTask = (id) => {
        setTask([...task.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })])
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
                        <h3>{days[day]}</h3>
                        <h2>{date.getDate()}</h2>
                        <h3>{months[date.getMonth()]}</h3>
                    </div>
                </div>
                <div className='taskWindow'>
                    {
                        task ? task.map((todo) => <Task completeTask={completeTask} todo={todo} key={todo.id} deleteTask={deleteTask} />) : ''
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

