import { useEffect, useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
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
		<div className="wrapper">
			<form className='formTodo'>
				<p>My ToDo List</p>
				<div className='inputValueWrapper'>
					<input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
					<button type='submit' onClick={onSubmitForm}>Add</button>
				</div>
				{
					task ? task.map((x, index) => <Task value={x} key={index} deleteTask={deleteTask}/>) : ''
				}
			</form>

		</div>
	);
}

export default App;
