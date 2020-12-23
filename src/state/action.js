import {MARKED_USER, SELECT_USER, ADD_NEW_USER, GET_USER} from './type'

export const selectUserAC = (user) => ({
    type: SELECT_USER,
    user
})

export const markedUserAC = (id) => ({
    type: MARKED_USER,
    id
})

export const addNewUserAC = (users) => ({
    type:ADD_NEW_USER,
    payload:users
})

export const getUsersAC = () => ({
    type: GET_USER
})