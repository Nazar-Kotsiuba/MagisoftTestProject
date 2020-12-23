import React from 'react'
import {useSelector} from "react-redux";

import {getSelectUser} from '../../state/selectors'
import styles from './User.module.css'

export const User = (props) => {
    const user = useSelector(getSelectUser)
    console.log(user)
    if (user) {
        return (
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <img src={user.picture.large} alt=""/>
                    </div>
                    <div className={styles.userIfo}>
                        <span>Адрес: {user.location.country + ' ' + user.location.city}</span>
                        <span>email: {user.email}</span>
                        <span>Пол: {user.gender}</span>
                        <span>Дата рождения: {user.dob.date}</span>
                        <span>Телефон:{user.phone}</span>
                    </div>
                </div>

            </div>
        )
    }
    return null
}
