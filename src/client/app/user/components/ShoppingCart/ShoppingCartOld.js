import React,{Component} from "react";
import axios from "axios"

class ShoppingCart extends Component {
	componentDidMount =()=>{
			this.setState({items:this.props.cart})
		}
	state ={
		items:[]
	}
	onQuantityChangedHandler = (event, index)=>{
		console.log(event.target.value)
		const isANumber = Number.isInteger(event.target.value);
		let newNumber = event.target.value === ""? 0: event.target.value;
		newNumber = Number(newNumber);
		const newArray = this.state.items.map((item,indexValue)=>{
			if(indexValue !== index){
				return {...item}
			}
				return {...item, quantity: Number.isNaN(newNumber)? item.quantity:newNumber}
		});

		this.setState({
			items:newArray
		})
	}

	render(){
		const items = this.state.items? (
			<ul>
				{
					this.state.items.map((item,index)=>{
						return <li key={index}>{item.item} | price : {item.price.toFixed(2)} | quantity : <input value={item.quantity.toFixed(0)} onChange={(event)=>this.onQuantityChangedHandler(event,index)}/></li>
					})
				}
			</ul>
			):null;

		return (
			<div>
			<h1>Shopping Cart ({this.state.items.reduce((sum,value)=>{return sum+ value.quantity},0)} items)</h1>
			{items}
			<h4>Total: $ {this.state.items.reduce((sum,value)=>{return sum + Number(value.price*value.quantity)},0).toFixed(2)}</h4>
			</div>
			)
	}
}

	
export default ShoppingCart