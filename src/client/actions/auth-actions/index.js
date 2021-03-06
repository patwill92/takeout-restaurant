import axios from 'axios'
import {GET_USER} from "../types";

export const getUser = req => {
    if(req && req.user) {
        const user = req.user;
        user.password = '';
        return {type: GET_USER, payload: user}
    }
    else if(req){
        return {type: GET_USER, payload: null}
    }
     else {
        return async dispatch => {
            const res = await axios.get('/user/current_user');
            dispatch({type: GET_USER, payload: res.data})
        }
    }
};

export const getUsers = req => {
    if(req) {
        return {type: GET_USERS, payload: req.user}
    } else {
        return async dispatch => {
            const res = await axios.get('/user/current_user');
            dispatch({type: GET_USERS, payload: res.data})
        }
    }
};