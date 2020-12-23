import {MARKED_USER, SELECT_USER, ADD_NEW_USER} from './type'

const initialState = {
    allUsers: [],
    markedUsers: [],
    selectUser: null,
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER: {
            return {...state, allUsers: [...state.allUsers, ...action.payload]}

        }
        case MARKED_USER: {
            const check = state.markedUsers.find(el => el.id.value === action.id)
            if(check){return state}
            const user = state.allUsers.find(el => el.id.value === action.id)
            return {...state, markedUsers: [...state.markedUsers, user]}
        }

        case SELECT_USER: {
            return {...state, selectUser: action.user}
        }
        default:
            return state
    }
}

