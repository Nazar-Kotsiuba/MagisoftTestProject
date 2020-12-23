import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {markedUserAC} from '../../../../../../../../state/action'
import {RoutersConfig} from '../../../../../../../../routes/routeConfig'
import {selectUserAC} from '../../../../../../../../state/action'
import {getTime} from '../../../../../../../../helpers/utils'
import styles from './Item.module.scss'

export const Item = ({firstName, lastName, avatar, id, user, btnStatus}) => {
    const dispatch = useDispatch()
    const [time, setTime] = useState('')
    return (
        <div className={styles.Wrapper}>
            <Link to={{pathname: `${RoutersConfig.user}/${id}`, state: {id: id}}}>
                <span className={styles.element} onClick={() => {
                    dispatch(selectUserAC(user))
                }}><img src={avatar} alt=""/></span>
            </Link>
            <span className={styles.element}>{id}</span>
            <span className={styles.element}>{firstName}</span>
            <span className={styles.element}>{lastName}</span>
            <span  className={styles.bntAndTime}>
                {
                    btnStatus
                    &&
                    <span className={styles.bnt} onClick={() => {
                        dispatch(markedUserAC(id))
                        setTime(getTime())
                    }}>тметить пользователя</span>
                }

                <span className={styles.time}>{time}</span>
            </span>

        </div>
    )
}