import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Menu from './components/Menu/Menu';
import Day from './pages/Day/Day';
import SevenDays from './pages/NextSevenDays/SevenDays';

function App() {

	return (
		<>
			<Menu />
			<Routes>
				<Route path='/myday' element={<Day />} />
				<Route path='/next-seven-days' element={<SevenDays />} />
				<Route path='*' element={<Day />} />
			</Routes>
		</>
	);
}

export default App;
