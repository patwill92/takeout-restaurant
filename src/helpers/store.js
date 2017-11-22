import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../client/reducers'

export const server = () => createStore(reducers, {});

export const client = (initialState) => createStore(reducers, initialState, applyMiddleware(thunk, logger));
