import {FETCH_CART,SET_TIMEOUT} from "../types"
import axios from "axios"

export const fetchCart = (req)=>{
	if(req){
		try{
			return {type:FETCH_CART,payload:req.dispatchData}
		}
		catch(error){
			console.log(error)
			return {type:FETCH_CART,payload:[]}
		}
	}else{
		try{
			return async dispatch=>{
				const user = await axios.get('/api/getusercart')
				const response = user.data.cart
				console.log('response is',response)
				if(response){
					dispatch({type:FETCH_CART,payload:response});
				}
			}
		}
		catch(error){
			console.log(error);
			return {type:FETCH_CART,payload:[]}
		}
	}
}

export const setTimer = (dispatch)=>{
	const timeout =  setTimeout(() => {
	        dispatch(fetchCart())
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

export const updateCart = (adder, index) => {
	return async(dispatch, getState) => {
		const newState = getState();
    const newCart = [...newState.cart]
    newCart[index] = {...newCart[index],
        quantity: newCart[index].quantity + adder
    };
    const quantity = newCart[index].quantity;
    dispatch({
        type: FETCH_CART,
        payload: newCart
    })
    axios.post('/api/addtocart', {
        quantity,
        index
    }).then().catch(error=>console.error(error));
    if(!newState.interval.timeout){
    		setTimer(dispatch);
    	}else{
	    	clearTimeout(newState.interval.timeout);
	    	setTimer(dispatch);
	    }
	   
}
}
