import React from 'react'
import {useState, useEffect} from 'react'
// import Task from './components/Task/Task';
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
        const list = [...task]
        list.splice(id, 1)
        setTask(list)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify([...task]))
    }, [task])


    return (
        <div className="wrapperDay">

            <form className='formTodo'>
                <div className='inputValueWrapper'>
                    <img className='plusButton' src='../../image/plus.png' alt='plus'/>
                    <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
                    <img className='submitButton' type='submit' onClick={onSubmitForm} src='../../image/sendTask.png' alt='enterTask'/>
                </div>
            </form>
        </div>
    )
}

export default Day

// task ? task.map((x, index) => <Task value={x} key={index} deleteTask={deleteTask} />) : ''