import React from "react";
import Icon from '../../../../components/Icon'
import {connect} from "react-redux"
import {changeMouseOverStars,showReviews,reviewItemHandler} from "../../../../../actions";
import RenderedStars from "./RenderedStars"
import {whichStar} from "../util"
import Button from "./Button"
import TextInput from "./TextInput"
import withStyles from 'react-jss'

const styles = theme => ({
    Button:{
	    border: 'none',
	    outline: 'none',
	    width: '100%',
	    backgroundColor:"#ad1313",
	    cursor:"pointer",
	    fontSize:"inherit",
	    transition:"background-color ease-out 0.2s",
	    "&:hover":{
	    	backgroundColor:"#e6e9ef"
	    }
    }
});


//this function generates buttons for optimization purposes and code readability

// this argument deconstruction is to make property chains longer than 2 impossible.
const ReviewInput = ({user:{itemsPurchased=[]},
	showReviews,
	reviewItemHandler,
	emptyField,
	reviewChangeHandler,
	classes,
	item:{showInput,name,itemReviews,_id,specialMessageValue,specialMessage},item,index})=>{

		const buttonToReviewGeneratedDynamicallyBasedOnUserHistory = itemsPurchased.includes(_id)?
		<Button className={classes.Button} clicked={()=>reviewItemHandler(item,index)}>Tell us what you thought!</Button>:null;
		const toggleExistingReviewsButton = itemReviews.length?
			<Button className={classes.Button} clicked={()=>showReviews(name)}>Show Reviews ({itemReviews.length})</Button>:
			<Button className={classes.Button} >Show Reviews ({itemReviews.length})</Button>
		const propsForTextInput = 
			{emptyField:emptyField,reviewChangeHandler:reviewChangeHandler,item:item};
		const conditionallyRenderedReviewInputFields = item.showInput?(
			<div>
					<RenderedStars item={item}/>
					<TextInput {...propsForTextInput} index={index}/>
					<Button clicked={()=>emptyField(item,index)}>Submit</Button>
					<Button clicked={()=>reviewItemHandler(item,index)}>Cancel</Button>
			</div>):null;
		let conditionallyRenderedSpecialMessage = 
		specialMessage?//this ternary is in outline format
			specialMessageValue?
					<h1>{specialMessageValue}</h1>
					:<h1>Thank You</h1>
			:null
				return(
					<div style={{position:"absolute",bottom:"0px",width:"100%"}}>
							{buttonToReviewGeneratedDynamicallyBasedOnUserHistory}
							{toggleExistingReviewsButton}
							{conditionallyRenderedReviewInputFields}
							{conditionallyRenderedSpecialMessage}
					</div>
						)
			}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps,{changeMouseOverStars,showReviews,reviewItemHandler})(withStyles(styles)(ReviewInput))