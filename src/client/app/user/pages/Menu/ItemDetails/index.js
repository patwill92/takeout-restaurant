import React from "react";
import Icon from '../../../../components/Icon'
import {whichStar} from "../util"
import Hoc from "../ReviewInput/Button/hoc"
import Button from "../ReviewInput/Button"

const nameStyle = {
    height: "100%",
    textAlign: "left",
    flexDirection: "column",
    margin: "0px",
    display: "flex",
    color:"black",
    fontWeight:"bold",
    position: "absolute",
    left: "10px",
    justifyContent: "space-around"
}
const nameStyleRight = {
    height: "100%",
    textAlign: "right",
    flexDirection: "column",
    margin: "0px",
    display: "flex",
    color:"black",
    fontWeight:"bold",
    position: "absolute",
    right: "10px",
    justifyContent: "space-around"
}
const wrapper = {
    position:"relative",
    height: "100%",
    color:"black",
    fontWeight:"bold",
    width:"100%",
    opacity:"0.4"}
const ItemDetails = ({item,className})=>{
	const getAverage = (itemValue)=>{
        return (itemValue.itemReviews.reduce((sum,value)=>{return sum+(value.rating||0)},0)/itemValue.itemReviews.length)
    }
	return(
    <div style={wrapper}>
    	<div style={nameStyle}>
          <span>{item.name.charAt(0).toUpperCase()+ item.name.slice(1)}</span>
          <span>{
        item.itemReviews.length?Array(Math.round(getAverage(item))).fill(0).map((value,index)=>{
          return <Icon 
        color={whichStar(Math.round(getAverage(item)))}
        key={index}
        name='star'
        loose
        size={15}/>
              }):null
         }</span>
      </div>
      <div style={nameStyleRight}>
       <div>${item.price.toFixed(2)}</div>
        <Button className={className} clicked={()=>{console.log('I have been clicked')}}>Add to cart</Button>
      </div>
  </div>
		)
}

export default ItemDetails		