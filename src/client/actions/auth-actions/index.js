import axios from 'axios'
import {GET_USER} from "../types";

export const getUser = req => {
    if(req && req.user) {
        const user = req.user;
        user.password = '';
        //this was what was causing the conflict, when it was ssr it was still considered a mongodb object so you couldn't use Array.prototype.includes properly
        return {type: GET_USER, payload: {...user,_id:String(user._id)}}
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