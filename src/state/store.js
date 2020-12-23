import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import {userReducer} from './users-reducer'
import {sagaWatcher} from './saga'
import {composeWithDevTools} from "redux-devtools-extension";

const saga = createSagaMiddleware()
const rootReducer = combineReducers({users:userReducer})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)) )
saga.run(sagaWatcher)