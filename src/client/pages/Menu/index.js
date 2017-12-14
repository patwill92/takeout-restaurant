import React, {Component} from 'react'
import ReviewInput from "./ReviewInput"
import Reviews from "./Reviews"
import withStyles from 'react-jss'
import {connect} from 'react-redux';
import axios from 'axios'
import {Link, withRouter} from "react-router-dom"
import {fetchMenu, fetchMenuAdmin, getUser} from "../../actions";
import * as util from "./util"
const call = util.call;

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex'
    },
    icon: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

class Menu extends Component {
    state ={
        menu:[]
    }
    componentDidMount(){
        call(this,util.initializeMenu);
    }
    componentWillReceiveProps(nextprops){
        call(this,util.updateMenu,nextprops);
    }
    reviewItemHandler = (item)=>{
        call(this,util.changeReviewInputStateForOneMenuItemComponent,item)
    }
    reviewChangeHandler = (item,value)=>{
        call(this,util.updateReviewInputValueForOneMenuItem,item,value)
    }
    emptyField = (item)=>{
        const potentialResults = call(this,util.apiCallAddReview,axios,item);
        console.log(potentialResults)
       if(!potentialResults){
        call(this,util.emptyMenuItem,item);
        call(this,util.sayThankYouFor6thOfSecondAfterSubmissionDelay,item)
       }else{
        const newMenu = [...this.state.menu];
        newMenu[potentialResults.index] = {...potentialResults.menuItemInQuestion,specialMessage:true,specialMessageValue:"please fill out all fields"}
        this.setState({
            menu:newMenu
        })
        call(this,util.sayThankYouFor6thOfSecondAfterSubmissionDelay,item,2000)
       }
    }
    showReviews = (item)=>{
        call(this,util.makeReviewsVisibleToTheUser,item)
    }
    changeStars = (num,fieldName)=>{
        call(this,util.changeAmountOfActualStarsForOneMenuItem,num,fieldName)
    }
    changeMouseOverStars = (num,fieldName)=>{
        call(this,util.changeAmountOfMouseOverStarsForOneMenuItem,num,fieldName);
    }
    render(){
        console.log(this.state.menu);
        const icon = this.props.classes.icon;
        const iconParent = this.props.classes.iconParent;
        return(
            <div>
            {this.props.user?null:(<Link to={"/login"}><p style={{fontSize:"25px"}}>Login/SignUp to Review!</p></Link>)}
                {this.state.menu.map((item)=>{
                    return (
                        <div key={item._id} style={{margin:"20px auto",color:"white",padding:"auto",boxShadow:"0 2px 2px",width:"900px",height:"auto",textAlign:"center",backgroundColor:"#aab6b7"}}>
                        <h1 style={{"fontSize":"25px",padding:"10px",fontWeight:"bold"}}>
                            {item.itemName.charAt(0).toUpperCase()+ item.itemName.slice(1)}
                        </h1>
                        <h2 style={{padding:"10px"}}>
                            ${item.price.toFixed(2)}
                        </h2>
                        <h2 style={{padding:"10px"}}>
                            {util.generateStaticStarRating(item.reviews.reduce((sum,value)=>{return sum+(value.rating)},0)/item.reviews.length)}
                        </h2>
                        {call(this,util.toggleBetweenShowingReviewsAndShowingSelectionButtons,item,Reviews,ReviewInput,icon,iconParent)}
                        </div>)
                        }
                )}
            </div>

            )
        }
    }
const mapStateToProps = call(null,util.mapStateToPropsForMenuComponent);
const loadData = call(null,util.loadDataForMenu,fetchMenu,fetchMenuAdmin);
export default {
    component: connect(mapStateToProps, {fetchMenu, getUser})(withRouter(withStyles(styles)(Menu))),
    loadData
}

