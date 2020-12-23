import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {selectUserAC} from '../../state/action'
import {getSelectUser, getMarkedUsersLength} from '../../state/selectors'
import {RoutersConfig} from '../../routes/routeConfig'
import {getTime} from '../../helpers/utils'
import styles from './Header.module.scss'

export const Header = (props) => {


    const [time, setTime] = useState('')
    const selectUser = useSelector(getSelectUser)
    const MarkedUsersLength = useSelector(getMarkedUsersLength)
    const dispatch = useDispatch()

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(getTime())
        }, 250)

        return () => {
            clearInterval(timerId)
        }
    }, [])


    return (
        <div className={styles.Wrapper}>
            <div className={styles.time}>{time}</div>
            <div  className={styles.userCount}>Отмеченые пользователи : {MarkedUsersLength}</div>
            {
                selectUser
                    ? <Link className={styles.btn} to={RoutersConfig.usersList} onClick={() => {
                        dispatch(selectUserAC(null))
                    }}>Назад</Link>
                    : <div className={styles.emptyBlock}/>
            }
        </div>
    )
}