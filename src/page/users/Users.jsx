import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {TabBar} from "./prts/tab/TabBar";
import {getAllUsers, getMarkedUsers} from '../../state/selectors'
import {getUsersAC} from '../../state/action'

export const Users = () => {
    const dispatch = useDispatch()

    const allUsers = useSelector(getAllUsers)
    const markedUsers = useSelector(getMarkedUsers)

    let data = [
        {
            name: 'All users',
            id: '1',
            data: allUsers
        },
        {
            name: 'Marked users',
            id: '2',
            data: markedUsers
        }
    ]

    useEffect(() => {
        dispatch(getUsersAC())
    }, [])

    return <div>
        <TabBar settings={data}/>
    </div>
}