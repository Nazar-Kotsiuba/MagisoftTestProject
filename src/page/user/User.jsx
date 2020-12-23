import React from 'react'
import {useSelector} from "react-redux";

import {getSelectUser} from '../../state/selectors'
import styles from './User.module.css'

export const User = (props) => {
    const user = useSelector(getSelectUser)

    if (user) {
        return (
            <div>
                <div>
                    <div>
                        <img src={user.picture.large} alt=""/>
                    </div>
                    <div className={styles.userIfo}>
                        <span>адрес: {user.country}</span>
                        <span>емейл: {user.email}</span>
                        <span>пол: {user.gender}</span>
                        <span>дата рождения: {user.dob.date}</span>
                        <span>телефон:{user.phone}</span>
                    </div>
                </div>

            </div>
        )
    }
    return null
}
