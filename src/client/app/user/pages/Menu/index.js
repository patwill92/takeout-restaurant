import React, {Component} from 'react'
import ReviewInput from "./ReviewInput"
import Reviews from "./Reviews"
import withStyles from 'react-jss'
import {connect} from 'react-redux';
import axios from 'axios'
import {Link, withRouter} from "react-router-dom"
import {fetchMenu, fetchMenuAdmin,updateMenu,postReview,invalidInput} from "../../../../actions";
import Icon from '../../../components/Icon'
import ItemDetails from "./ItemDetails"
const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex'
    },
    item:{
        margin:"20px auto",
        color:"white",padding:"auto",
        boxShadow:"0 2px 2px",
        width:"900px",
        height:"auto",
        textAlign:"center",
        backgroundColor:"#aab6b7"
    }
});

class Menu extends Component {

  reviewChangeHandler = (value,index)=>{
        const newMenu = [...this.props.clientMenu]
        newMenu[index] = {...newMenu[index],currentReview:value}
        this.props.updateMenu({clientMenu:newMenu})
  }
  emptyField = async (item,index)=>{
      const menuItemInQuestion = this.props.clientMenu[index];
      if(menuItemInQuestion.starAmount  === 0 || !menuItemInQuestion.currentReview)
       {
        this.props.invalidInput(index,this.props.clientMenu,menuItemInQuestion)
       }
      else{
        this.props.postReview(menuItemInQuestion,this.props.user._id,index,this.props.clientMenu)
      }            
  }
render(){
  return(
    <div>
  {this.props.user?null:(<Link to={"/login"}><p style={{fontSize:"25px"}}>Login/SignUp to Review!</p></Link>)}
    {this.props.clientMenu.map((item,index)=>{
      return (
        <div key={item._id} className={this.props.classes.item}>
        <ItemDetails item={item}/>
            {item.showReviews?(
              <Reviews item={item}/>
              ):(<ReviewInput
              item={item}
              index={index} 
              reviewChangeHandler={this.reviewChangeHandler}
              emptyField={this.emptyField}
               />)}
          </div>)
            }
      )}
    </div>

      )
    }
    }
const mapStateToProps = ({menu, user}) => {
            return {
                clientMenu:menu.clientMenu,
                user
            }
    };

const loadData = async (mongoose) => {
    const menu = await mongoose.model("Item").find().populate({
                path:'itemReviews',
                populate:{path:'user',select:"name"}
            })
    return [
        {
            data: menu,
            func: fetchMenu
        }
    ]
};
export default {
    component: connect(mapStateToProps, {fetchMenu,updateMenu,postReview,invalidInput})(withRouter(withStyles(styles)(Menu))),
    loadData
}

