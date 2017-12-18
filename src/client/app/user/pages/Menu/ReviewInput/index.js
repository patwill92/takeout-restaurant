import React from "react";
import Icon from '../../../../components/Icon'
import {connect} from "react-redux"
import {changeMouseOverStars,showReviews,reviewItemHandler} from "../../../../../actions";
import RenderedStars from "./RenderedStars"
import {whichStar} from "../util"
import Button from "./Button"
import ButtonDisabled from "./Button/ButtonDisabled"
import TextInput from "./TextInput"

//this function generates buttons for optimization purposes and code readability

// this argument deconstruction is to make property chains longer than 2 impossible.
const ReviewInput = ({user:{itemsPurchased=[]},
	showReviews,
	reviewItemHandler,
	emptyField,
	reviewChangeHandler,
	item:{showInput,name,itemReviews,_id,specialMessageValue,specialMessage},item,index})=>{

		const buttonToReviewGeneratedDynamicallyBasedOnUserHistory = itemsPurchased.includes(_id)?
		<Button clicked={()=>reviewItemHandler(item,index)}>Tell us what you thought!</Button>:null;
		const toggleExistingReviewsButton = itemReviews.length?
			<Button clicked={()=>showReviews(name)}>Show Reviews ({itemReviews.length})</Button>:
			<Button>Show Reviews ({itemReviews.length})</Button>
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
					<div>
							{buttonToReviewGeneratedDynamicallyBasedOnUserHistory}
							{toggleExistingReviewsButton}
							{conditionallyRenderedReviewInputFields}
							{conditionallyRenderedSpecialMessage}
					</div>
						)
			}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps,{changeMouseOverStars,showReviews,reviewItemHandler})(ReviewInput)