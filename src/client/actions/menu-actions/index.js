import axios from 'axios'

import {FETCH_MENU_ADMIN, FETCH_MENU} from "../types";

export const fetchMenu = req => {
    if(req) {
        return {type: FETCH_MENU, payload: req.dispatchData}
    } else {
        return async dispatch => {
            const {data} = await axios.get('/api/menu');
            dispatch({type: FETCH_MENU, payload: data})
        }
    }
};

export const fetchMenuAdmin = req => {
    if(req) {
        return {type: FETCH_MENU_ADMIN, payload: req.dispatchData}
    } else {
        return async dispatch => {
            const {data} = await axios.get('/api/menu');
            dispatch({type: FETCH_MENU, payload: data})
        }
    }
};

export const addMenuItem = (data, history) => async dispatch => {
    try {
        await axios.post('/api/menu', data, {headers: {'Content-Type': 'multipart/form-data'}});
        history.push('/');
        dispatch({type: FETCH_MENU});
    } catch(e) {
        console.log(e)
    }
};
