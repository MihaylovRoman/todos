import React from 'react'
import './style.css'

const SevenDays = () => {
	return (
		<div className='wrapperSevenDays'>
			<div className='SevenDays__title'>
				<img src='../../image/calendar.png'/>
				<h3>Next 7 days</h3>
				<p>My lists</p>
				<div className='SevenDays__title_dots'>
					<div className='SevenDays__title_dot'></div>
					<div className='SevenDays__title_dot'></div>
					<div className='SevenDays__title_dot'></div>
				</div>
			</div>
		</div>
	)
}

export default SevenDays