import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import {fetchCart,updateCart} from "../../../../actions";
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'
import MenuItem from "../../../components/MenuItem"
				/*<ShoppingCart cart={this.props.cart}/>*/

class Cart extends Component {

		componentDidMount(){
			this.props.fetchCart();
		}
		onQuantityChangeHandler = (value,index)=>{
		if(this.props.cart[index].quantity === 0 && value === "down"){
			return
		}
		switch(value){
			case "up":
				this.props.updateCart(1,index)
			break;
			case "down":
				this.props.updateCart(-1,index)
			break;
		}
	}

	render(){
		const cartItems = this.props.cart.map(cart=>({item:cart.item,quantity:cart.quantity}));
		const total = cartItems.reduce((sum,value)=>{return sum+(value.item.price*value.quantity)},0)
		console.log(this.props.cart);
		return this.props.cart.length?<MenuItem menu={cartItems} type={"Check Out"} changed={this.onQuantityChangeHandler} total={total}/>:<h1>Cart is empty</h1>
	}
}

const mapStateToProps = ({cart}) => {
    return {
    	cart
    }
};

const loadData = async (mongoose,userValue) => {
	let user;
	let response;
	if(userValue){
			user = await mongoose.model('User').findOne({_id:userValue._id}).populate('cart.item')
    	response = user.cart;
	}else{
		response = null;
	}
    return [
	    {	
	    	data:response,
	    	func:fetchCart
	    }
    ]
};
	
export default {
    component: connect(mapStateToProps,{fetchCart,updateCart})(Cart),
    loadData
}