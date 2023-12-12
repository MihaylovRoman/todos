import React from 'react'
import './style.css'
const MyProfile = ({active, setActive}) => {
    return (
        <div>
            <img onClick={() => setActive(!active)} className='arrowback' src='../../image/arrowback.png' alt='back' />
            <div className='positionProfile'>
                <p style={{marginBottom: 50}}>Мой профиль</p>
                <img style={{marginBottom: 7}} className='imageAccount' src='../../image/defaultImageAccount.png' alt='imageAccount' />
                <p style={{margin: 0, padding: 7}}>username</p>
                <p style={{margin: 0, paddingBottom: 20}}>(mail)</p>
                <button className='premiumBtn'> Go premium</button>
            </div>
            <hr style={{ width: '370px', marginTop: 15 }} />
            <div className='ProfileAccount'>
                <div className='ProfileAccount__link'>
                    <p className='profileTag'>Восстановить пароль</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow' />
                </div>
            </div>
            <hr style={{ width: '370px'}} />
            <div className='ProfileAccount'>
                <div className='ProfileAccount__link'>
                    <p className='profileTag'>Удалить аккаунт</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow' />
                </div>
            </div>
            <hr style={{ width: '370px'}} />
            <div className='ProfileAccount'>
                <div className='ProfileAccount__link'>
                    <p className='profileTag'>Выйти</p>
                    <img className='profileTag__arrowImg' src='../../image/arrow.png' alt='arrow' />
                </div>
            </div>

        </div>
    )
}

export default MyProfile