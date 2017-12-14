import React from "react";
import Icon from '../../../components/Icon'


 const whichStar = (amountOfStars)=>{
	switch(amountOfStars){
		case 1:
		return '#de8918'
		case 2:
		return '#991312'
		case 3:
		return '#2b14dd'
		case 4: 
		return '#de12b7'
		case 5:
		return '#39ff2b'
	}
}


const ReviewInput = (props)=>{
			const renderedStars = (
				<div className={props.iconParent}>{[1,2,3,4,5].map((num)=>(
					<div key={num+props.item.name}
						onMouseEnter={(event)=>{props.changeMouseOverStars(num,props.item.name)}}
						onMouseLeave={()=>props.changeMouseOverStars(0,props.item.name)}
						onClick={()=>props.changeStars(num,props.item.name)}
						className={props.icon} 
						style={{display: 'inline-block',"margin":"5px"}}
					>
					<Icon
						 color={props.mouseOverStarAmount?
			      	(props.mouseOverStarAmount>=num?
			      		whichStar(props.mouseOverStarAmount):""):
			      	props.starAmount>=num?whichStar(props.starAmount):""}
			       name='star'
			       loose
			       size={30}/>
					</div>
	
		))}</div>)
			console.log(props.itemsReviewed)
			console.log(props.itemsReviewed.includes(props.item._id))
			return(
				<div>
						{props.itemsReviewed.includes(props.item._id+'')?
								<button style={{padding:"10px", margin:"15px"}} onClick={()=>props.reviewItemHandler(props.item.name)}>
								Tell us what you thought!
								</button>:null}
						{props.item.itemReviews.length?(<button style={{padding:"10px", margin:"15px"}} onClick={()=>props.showReviews(props.item.name)}>
								Show Reviews({props.item.itemReviews.length})
							</button>):<button disabled style={{padding:"10px", margin:"15px"}}>No reviews yet</button>}
						<br/>
						{props.item.showInput?							
								(<div>
										<div>
											{renderedStars}
										</div>
										<textarea cols={60} rows={20} 
										onChange={(event)=>{event.target.value.endsWith("\n")?
										(confirm("would you like to submit?")?props.emptyField(props.item.name):null):null;
										props.reviewChangeHandler(props.item.name,event.target.value)}} 
										style={{margin:"5px",fontSize:"20px"}}
										placeholder={" write your review here "}
										value={props.item.currentReview}/>
										<br/>
										<button style={{padding:"10px", margin:"5px"}}
										 onClick={()=>props.emptyField(props.item.name)}>
											Submit
										</button>
										<button style={{padding:"10px", margin:"5px"}}
										 onClick={()=>props.reviewItemHandler(props.item.name)}>
											Cancel
										</button>
								</div>):null}
						<br/>
						{props.item.specialMessage?props.item.specialMessageValue?(<h1>{props.item.specialMessageValue}</h1>):(<h1>Thank You</h1>):null}
				</div>
					)
}
export default ReviewInput