import axios from 'axios'

import {FETCH_MENU_ADMIN, FETCH_MENU, FETCH_TEST_MENU} from "../types";

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

export const fetchTestMenu = () => async dispatch => {
    const {data} = await axios.get('/api/testmenu');
    dispatch({type: FETCH_TEST_MENU, payload: data})
}

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

export const addMenuItem = (formData, history) => async dispatch =>{
    try {
        await axios.post('/api/menu', formData, {headers: {'Content-Type': 'multipart/form-data'}});
        const {data} = await axios.get('/api/menu');
        history.push('/');
        dispatch({type: FETCH_MENU, payload: data});
    } catch(e) {
        console.log(e)
    }
};
