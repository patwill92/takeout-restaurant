import React,{Component} from "react";
import axios from "axios"

class Testing extends Component {
	state ={
		menuValue: ``,
		userValue:``,
		reviewValue:``
	}
	menuChangeHandler = (event)=>{
		this.setState({
			menuValue:event.target.value
		})
	}
	userChangeHandler = (event)=>{
		this.setState({
			userValue:event.target.value
		})
	}

	reviewChangeHandler = (event)=>{
		this.setState({
			reviewValue:event.target.value
		})
	}

	submitMenuHandler = ()=>{
		const values = this.state.menuValue.replace(/(\n+|\s{2,})/g,"")
		const test = JSON.parse(values.trim());
		axios.post("/api/menuvalue",{value:test}).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
	}
	submitUserHandler = ()=>{
		const values = this.state.userValue.replace(/(\n+|\s{2,})/g,"")
		const test = JSON.parse(values.trim());
		axios.post("/api/uservalue",{value:test}).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
	}
	submitReviewHandler = ()=>{
		const values = this.state.reviewValue.replace(/(\n+|\s{2,})/g,"")
		const test = JSON.parse(values.trim());
		axios.post("/api/reviewvalue",{value:test}).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
	}
	render(){
		return(
		<div>
			<div style={{textAlign:"center"}}>
			menu submission
			<br/>
				<textarea onChange={(event)=>{this.menuChangeHandler(event)}} cols="10" rows="10">
				</textarea>
				<br/>
				<button onClick={this.submitMenuHandler} style={{height:"100px",width:"100px"}}>
				click here to submit for menu
				</button>
			</div>
			<div style={{textAlign:"center"}}>
			user submission
			<br/>
				<textarea onChange={(event)=>{this.userChangeHandler(event)}} cols="10" rows="10">
				</textarea>
				<br/>
				<button onClick={this.submitUserHandler} style={{height:"100px",width:"100px"}}>
				click here to submit for menu
				</button>
			</div>
			<div style={{textAlign:"center"}}>
			review submission
			<br/>
				<textarea onChange={(event)=>{this.reviewChangeHandler(event)}} cols="10" rows="10">
				</textarea>
				<br/>
				<button onClick={this.submitReviewHandler} style={{height:"100px",width:"100px"}}>
				click here to submit for review
				</button>
			</div>
		</div>
			)
	}
}

	
export default {
	component:Testing
}