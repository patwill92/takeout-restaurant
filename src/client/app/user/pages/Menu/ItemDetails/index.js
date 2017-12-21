import React from "react";
import Icon from '../../../../components/Icon'
import {whichStar} from "../util"

const ItemDetails = ({item})=>{
	const getAverage = (itemValue)=>{
        return (itemValue.itemReviews.reduce((sum,value)=>{return sum+(value.rating||0)},0)/itemValue.itemReviews.length)
    }
	return(
	<div className='menu-details'>
	<h1 style={{"fontSize":"25px",padding:"10px",fontWeight:"bold"}}>
      {item.name.charAt(0).toUpperCase()+ item.name.slice(1)}
  </h1>
  <h2 style={{padding:"10px"}}>
      ${item.price.toFixed(2)}
  </h2>
  <h2 style={{padding:"10px"}}>
      {
    item.itemReviews.length?Array(Math.round(getAverage(item))).fill(0).map((value,index)=>{
      return <Icon 
    color={whichStar(Math.round(getAverage(item)))}
    key={index}
    name='star'
    loose
    size={40}/>
          }):null
     }
  </h2>
  </div>
		)
}

export default ItemDetails		