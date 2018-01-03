import axios from 'axios'

import {
    FETCH_MENU_ADMIN,
    FETCH_MENU,
    FETCH_TEST_MENU, UPDATE_MENU,
    UPDATE_MOUSE_OVER_STARS,
    UPDATE_STARS,
    SHOW_REVIEWS,
    SET_TIMEOUT
} from "../types";

export const fetchMenu = (req, reset, index) => {
    if (req && req.dispatchData) {
        return {type: FETCH_MENU, payload: req.dispatchData}
    }
    else if (reset) {
        return async (dispatch, getState) => {
            const {data} = await axios.get('/api/menu');
            const newMenu = [...getState().menu.clientMenu];
            newMenu[index].itemReviews = [...data[index].itemReviews];
            dispatch(updateMenu({
                clientMenu: newMenu
            }));
            //this is the only way to bypass the fact that there is a shallow comparison going on with react
            dispatch({type: "TESTING"});
            setTimeout(() => {
                const newMenuForMessage = [...getState().menu.clientMenu];
                newMenuForMessage[index] = {...newMenuForMessage[index], specialMessage: false};
                dispatch(updateMenu({clientMenu: newMenuForMessage}))
            }, 400)
        }
    } else if(req && req.clientData) {
        return {type: FETCH_MENU, payload: req.clientData}
    }
    else {
        return async dispatch => {
            const {data} = await axios.get('/api/menu');
            dispatch({type: FETCH_MENU, payload: data})
        }
    }
};
export const changeMouseOverStars = (num, fieldName) => {
    return {type: UPDATE_MOUSE_OVER_STARS, payload: {num, fieldName}}
}
export const changeStars = (num, fieldName) => {
    return {type: UPDATE_STARS, payload: {num, fieldName}}
}
export const showReviews = (item) => {
    return {type: SHOW_REVIEWS, payload: {item}}
}
export const fetchTestMenu = () => async dispatch => {
    const {data} = await axios.get('/api/testmenu');
    dispatch({type: FETCH_TEST_MENU, payload: data})
}

export const updateMenu = (data) => {
    return {type: UPDATE_MENU, payload: data}
}
export const invalidInput = (index, clientMenu, menuItemInQuestion) => {
    return (dispatch, getState) => {
        const newMenu = [...clientMenu];
        newMenu[index] = {
            ...menuItemInQuestion,
            specialMessage: true,
            specialMessageValue: "please fill out all fields"
        }
        dispatch(updateMenu({clientMenu: newMenu}))
        setTimeout(() => {
            const clientMenuValue = [...getState().menu.clientMenu];
            clientMenuValue[index] = {...clientMenuValue[index], specialMessage: false, specialMessageValue: ""}
            dispatch(updateMenu({clientMenu: clientMenuValue}))
        }, 2000)
    }
}
export const postReview = (itmInQuest, id, index, menu) => (dispatch, getState) => {
    const newMenu = [...menu];
    newMenu[index] = {
        ...newMenu[index], currentReview: '',
        showInput: false,
        specialMessage: true,
        starAmount: 0,
        mouseOverStarAmount: 0
    };
    dispatch(updateMenu({clientMenu: newMenu}))
    axios.post("/api/addreview", {
        content: itmInQuest.currentReview,
        rating: itmInQuest.starAmount,
        user: id,
        item: itmInQuest._id
    }).then((response) => {
        dispatch(fetchMenu(null, true, index));
    }).catch((error) => console.error(error))
}

export const fetchMenuAdmin = req => {
    if (req) {
        return {type: FETCH_MENU_ADMIN, payload: req.dispatchData}
    } else {
        return async dispatch => {
            const {data} = await axios.get('/api/menu');
            dispatch({type: FETCH_MENU, payload: data})
        }
    }
};

export const addMenuItem = (formData) => async dispatch => {
    try {
        await axios.post('/api/menu', formData, {headers: {'Content-Type': 'multipart/form-data'}});
        const {data} = await axios.get('/api/menu');
        dispatch({type: FETCH_MENU, payload: data});
    } catch (e) {
        console.log(e)
    }
};
export const setTimerMenu = (dispatch)=>{
    const timeout =  setTimeout(() => {
            dispatch(fetchMenu())
                dispatch({
                type: SET_TIMEOUT,
                payload: {timeout:null}
            })
        }, 5000);
        dispatch({
            type: SET_TIMEOUT,
            payload: {timeout}
        })
}
export const updateAvailability = (id,available,menu,index) => async(dispatch,getState) => {
    const newMenu = [...menu]
    newMenu[index] = {...newMenu[index],available:!newMenu[index].available}
    dispatch({type:FETCH_MENU,payload:newMenu});
    let {data} = await axios.post('/api/availability', {id, available});
    if(!getState().interval.timeout){
        setTimerMenu(dispatch)
    }else{
        clearTimeout(getState().interval.timeout);
        setTimerMenu(dispatch);
    }
};

export const deleteItem = id => async dispatch => {
    let {data} = await axios.post('/api/delete_item', {id});
    dispatch(fetchMenu({clientData: data}));
};

export const reviewItemHandler = (item, index) => {
    return (dispatch, getState) => {
        const newMenu = [...getState().menu.clientMenu];
        newMenu[index] = {...newMenu[index], showInput: !newMenu[index].showInput}
        dispatch(updateMenu({clientMenu: newMenu}))
    }
}
