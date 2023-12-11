import React from 'react'
import './style.css'

const SettingsAccount = ({active, setActive}) => {
    return (
        <div className={active ? 'backWindow activeSettingsACcount': 'backWindow'} onClick={() => setActive(false)}>
            <div className='blockSettings' onClick={e => e.stopPropagation()}>
                <div className='userAccount'>
                    <img className='userSettings' src='../../image/camera.png' alt='photo1' />
                    <p>username</p>
                </div>
                <h4 style={{margin: '5px 39px', fontWeight: 600, paddingTop: 20}}>АККАУНТ</h4>
                <hr style={{width: '370px'}}/>
                <div className='ProfileAccount'>
                    <div className='ProfileAccount__link'>
                    <p className='profileTag'>Мой профиль</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow'/>
                    </div>
                </div>
                <hr style={{width: '370px'}}/>
                <div className='ProfileAccount'>
                    <div className='ProfileAccount__link'>
                    <p className='profileTag'>Архивированные задачи</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow'/>
                    </div>
                </div>
                <h4 style={{margin: '5px 39px', fontWeight: 600, paddingTop: 20}}>РАБОЧЕЕ МЕСТО</h4>
                <hr style={{width: '370px'}}/>
                <div className='ProfileAccount'>
                    <div className='ProfileAccount__link'>
                    <p className='profileTag'>Напоминания в рабочем месте</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow'/>
                    </div>
                </div>
                <hr style={{width: '370px'}}/>
                <div className='ProfileAccount'>
                    <div className='ProfileAccount__link'>
                    <p className='profileTag'>Создать новое рабочее место</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsAccount