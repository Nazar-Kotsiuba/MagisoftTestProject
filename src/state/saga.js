import {takeEvery, put, call} from 'redux-saga/effects'
import axios from 'axios'

import {addNewUserAC} from './action'
import {GET_USER} from './type'

export function* sagaWatcher() {
    yield takeEvery(GET_USER, sagaWorker)
}

function* sagaWorker() {
    const payload = yield call(getUsers)
    yield put(addNewUserAC(payload.data.results))
}

async function getUsers() {
    return await axios.get('https://randomuser.me/api/?results=20')

}