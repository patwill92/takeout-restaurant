import axios from 'axios'

import {GET_USER} from "../types";

export const getUser = req => {
    if(req) {
        return {type: GET_USER, payload: req.user}
    } else {
        return async dispatch => {
            const res = await axios.get('/user/current_user');
            dispatch({type: GET_USER, payload: res.data})
        }
    }
};