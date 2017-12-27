import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux"
import {updateCart} from "../../../../actions"

class ShoppingCart extends Component {

	onQuantityChangeHandler = (event,value,index)=>{
		if(this.props.cart[index].quantity === 0 && value === "down"){
			return
		}
		const newItems = [...this.props.cart];

		switch(value){
			case "up":
				newItems[index] = {...newItems[index],quantity:newItems[index].quantity+1};
			break;
			case "down":
				newItems[index] = {...newItems[index],quantity:newItems[index].quantity-1};
			break;
		}
		this.props.updateCart(newItems[index].quantity,index)
	}

	render(){
		console.log(this.props);
		const items = this.props.cart? (
			<ul>
				{
					this.props.cart.map((item,index)=>{
						return (<div key={index}>
							<li style={{"display":"inline-block"}}>{item.item.name} | price : {item.item.price.toFixed(2)} | quantity : {item.quantity}</li>
							<button onClick={(event)=>{this.onQuantityChangeHandler(event,"up",index)}} style={{"display":"inline-block","margin":"5px"}}>
							up
							</button>
							<button onClick={(event)=>{this.onQuantityChangeHandler(event,"down",index)}} style={{"display":"inline-block","margin":"5px"}}>
							down
							</button>
						</div>
						)
					})
				}
			</ul>
			):null;

		return (
			<div>
			<h1>Shopping Cart ({this.props.cart.reduce((sum,value)=>{return sum+ value.quantity},0)} items)</h1>
			{items}
			<h4>Total: $ {this.props.cart.reduce((sum,value)=>{return sum + Number(value.item.price*value.quantity)},0).toFixed(2)}</h4>
			</div>
			)
	}
}


	
export default connect(null,{updateCart})(ShoppingCart)