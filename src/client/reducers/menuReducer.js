import {
FETCH_MENU,
FETCH_MENU_ADMIN,
FETCH_TEST_MENU,
UPDATE_MENU,
UPDATE_MOUSE_OVER_STARS,UPDATE_STARS,SHOW_REVIEWS} from "../actions/types"
import {updateMenu} from "./util"

 const updateMouseOverStars = (state,{payload:{num,fieldName}})=>{
    return updateMenu(state,(menuItem)=>{
        return menuItem.name === fieldName? {...menuItem,mouseOverStarAmount:num}:menuItem;
    })
 }
 const updateStars = (state,{payload:{num,fieldName}})=>{
    return updateMenu(state,(menuItem)=>{
        return menuItem.name === fieldName? {...menuItem,starAmount:num}:menuItem;
    });
 }
 const showReviews = (state,{payload:{item}})=>{
    return updateMenu(state,(itemValue)=>{
            return itemValue.name !== item ? itemValue: {...itemValue,showReviews:!itemValue.showReviews,showInput:false}
        })
 }

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MENU:
            return {
                ...state,
                clientMenu: action.payload
            };
        case UPDATE_MOUSE_OVER_STARS:
            return updateMouseOverStars(state,action);
        case UPDATE_STARS:
            return updateStars(state,action);
        case SHOW_REVIEWS:
            return showReviews(state,action);
        case UPDATE_MENU:
            return {
                ...state,
                ...action.payload
            };
        case FETCH_MENU_ADMIN:
            return {
                ...state,
                adminMenu: action.payload
            };
        case FETCH_TEST_MENU:
            return {
                ...state,
                testMenu: action.payload
            };
        default:
            return state;
    }
}