import React, {useState} from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import SettingsAccount from '../SettingsAccount/SettingsAccount'

const Menu = () => {
    const [settingsAccount, setSettingsAccount] = useState(true)
    return (
        <>
        <div className='menuWrapper'>

            <div className='settingsUser'>
                <img onClick={() => setSettingsAccount(true)} className='userSettings' src='../../image/settings.png' alt='settings'/>
                <p>username</p>
            </div>
            <div className='goPremium'>
                <button className='premiumBtn'>Go premium</button>
            </div>
            <main>
                <NavLink className={({ isActive }) => isActive ? 'activeRouter router' : 'router'} to='/myday'>
                    <img src='../../image/clover.png' alt='myday' />
                    My day
                </NavLink>
                <NavLink to='/next-seven-days' className={({ isActive }) => isActive ? 'activeRouter router' : 'router'}>
                    <img src='../../image/calendar.png' alt='7days' />
                    Next 7 days
                </NavLink>
                <NavLink to='/AllTasks' className={({ isActive }) => isActive ? 'activeRouter router' : 'router'}>
                    <img src='../../image/calendar2.png' alt='myday' />
                    All task
                </NavLink>
            </main>
            
        </div>
        <SettingsAccount active={settingsAccount} setActive={setSettingsAccount}/>
        </>

    )
}

export default Menu