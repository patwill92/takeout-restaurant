import React from "react";
import {connect} from "react-redux"
import {changeMouseOverStars,showReviews} from "../../../../../actions";
import {reviewsBox,reviewBox,userName,content} from "./styles"
import Button from "../ReviewInput/Button"

const Reviews = ({showReviews,item})=>{
	return(
		<div>
      <Button clicked={()=>showReviews(item.name)}>hide reviews</Button>
      <div style={reviewsBox}>
          {item.itemReviews.map((reviewValue,index)=>
          (<div key={index}>
          <div style={reviewBox}>
          <p style={userName}>{reviewValue.user.name}</p>
          <p style={content}>Rating : {reviewValue.rating}</p>
          <em style={content}>{reviewValue.content}</em>
          </div>  
          </div>
          ))}
      </div>
    </div>

		)
}

export default connect(null,{showReviews})(Reviews)		