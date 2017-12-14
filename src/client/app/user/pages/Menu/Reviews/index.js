import React from "react";

const Reviews = ({showReviews,item})=>{
	return(
		<div>
      <button onClick={()=>showReviews(item.name)}>hide reviews</button>
      <div style={{overflow:"scroll",height:"400px"}}>
          {item.itemReviews.map((reviewValue,index)=>
          (<div key={index}>
          <div style={{boxShadow:"0px 0.5px 0.5px",padding:"10px", margin:"5px",backgroundColor:"#a7d1ba"}}>
          <p style={{fontWeight:"bold",fontSize:"22px"}}>{reviewValue.user.name}</p>
          <p style={{fontSize:"18px"}}>Rating : {reviewValue.rating}</p>
          <em style={{fontSize:"18px"}}>{reviewValue.content}</em>
          </div>  
          </div>
          ))}
      </div>
    </div>

		)
}

export default Reviews		