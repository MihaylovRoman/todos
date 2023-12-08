import React from 'react'
import './style.css'

const Menu = () => {
    return (
        <div className='menuWrapper'>
            <div className='container'>
                <div className='settingsUser'>
                    <img className='userSettings' src='../../image/settings.png' alt='settings' />
                    <p>username</p>
                </div>
                <div className='goPremium'>
                    <button className='premiumBtn'>Go premium</button>
                </div>
                <main>
                    <div className='router'>
                        <img src='../../image/clover.png' alt='myday' />
                        <p>My day</p>
                    </div>
                    <div className='router'>
                        <img src='../../image/calendar.png' alt='7days' />
                        <p>Next 7 days</p>
                    </div>
                    <div className='router'>
                        <img src='../../image/calendar2.png' alt='myday' />
                        <p>All task</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Menu