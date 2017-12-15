import React, {Component} from 'react'
import ReviewInput from "./ReviewInput"
import Reviews from "./Reviews"
import withStyles from 'react-jss'
import {connect} from 'react-redux';
import axios from 'axios'
import {Link, withRouter} from "react-router-dom"
import {fetchMenu, fetchMenuAdmin, getUser,updateMenu} from "../../actions";
import Icon from '../../components/Icon'


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

    reviewItemHandler = (item)=>{
        this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((itemValue)=>{
                return itemValue.name !== item? itemValue: {...itemValue,showInput:!itemValue.showInput}
            })
        })
    }
    reviewChangeHandler = (item,value)=>{
        this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((itemValue)=>{
                return itemValue.name !== item ? itemValue: {...itemValue,currentReview:value}
            })
        })
    }
    emptyField = (item)=>{
        let potentialResults = null
            let index = null
            const menuItemInQuestion = this.props.clientMenu.filter(function(itemValue,indexValue)
                {index=index?index:(itemValue.name===item?indexValue:null);
                    return itemValue.name===item})[0]
            if(menuItemInQuestion.starAmount  === 0) {potentialResults={menuItemInQuestion,index}}

            else if(!menuItemInQuestion.currentReview) {potentialResults={menuItemInQuestion,index}}

            else{
                         axios.post("/api/addreview",{
                        content:menuItemInQuestion.currentReview,
                        rating:menuItemInQuestion.starAmount,
                        user:this.props.user._id,
                        item:menuItemInQuestion._id
                    }).then((response)=>{
                        return this.props.fetchMenu();
                    }).catch((error)=>console.error(error))

                }            
       if(!potentialResults){
            this.props.updateMenu({clientMenu:this.props.clientMenu.map((itemValue)=>{
                return itemValue.name !== item?itemValue:
                {...itemValue,
                currentReview:'',
                showInput:false,
                specialMessage:true,
                starAmount:0,
                mouseOverStarAmount:0};
        })})
        setTimeout(() => {
          this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((itemValue)=>{
                return itemValue.name !== item ? itemValue: {...itemValue,specialMessage:false,specialMessageValue:""}
            })
        })
        },600)
       }else{
        const newMenu = [...this.props.clientMenu];
        newMenu[potentialResults.index] = {...potentialResults.menuItemInQuestion,specialMessage:true,specialMessageValue:"please fill out all fields"}
        this.props.updateMenu({
            clientMenu:newMenu
        })
        setTimeout(() => {
          this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((itemValue)=>{
                return itemValue.name !== item ? itemValue: {...itemValue,specialMessage:false,specialMessageValue:""}
            })
        })
        }, 2000)
       }
    }
    showReviews = (item)=>{
        this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((itemValue)=>{
                return itemValue.name !== item ? itemValue: {...itemValue,showReviews:!itemValue.showReviews,showInput:false}
            })
        })
    }
    changeStars = (num,fieldName)=>{
        this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((menuItem)=>{
                return menuItem.name === fieldName? {...menuItem,starAmount:num}: menuItem;
            })
        })
    }
    changeMouseOverStars = (num,fieldName)=>{
        this.props.updateMenu({
            clientMenu:this.props.clientMenu.map((menuItem)=>{
                return menuItem.name === fieldName? {...menuItem,mouseOverStarAmount:num}:menuItem;
            })
        })
    }
    getAverage = (item)=>{
       
        return (item.itemReviews.reduce((sum,value)=>{return sum+(value.rating)},0)/item.itemReviews.length)
    }

    whichStar = (amountOfStars)=>{
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
  
    render(){
        const icon = this.props.classes.icon;
        const iconParent = this.props.classes.iconParent;
    /*    console.log("DURING SSRRENDER")
        console.log(this.props.user.itemsPurchased)*/
        return(
            <div>
            {this.props.user?null:(<Link to={"/login"}><p style={{fontSize:"25px"}}>Login/SignUp to Review!</p></Link>)}
                {this.props.clientMenu.map((item)=>{
                    return (
                        <div key={item._id} style={{margin:"20px auto",color:"white",padding:"auto",boxShadow:"0 2px 2px",width:"900px",height:"auto",textAlign:"center",backgroundColor:"#aab6b7"}}>
                        <h1 style={{"fontSize":"25px",padding:"10px",fontWeight:"bold"}}>
                            {item.name.charAt(0).toUpperCase()+ item.name.slice(1)}
                        </h1>
                        <h2 style={{padding:"10px"}}>
                            ${item.price.toFixed(2)}
                        </h2>
                        <h2 style={{padding:"10px"}}>
                            {
                                Array(Math.round(this.getAverage(item))).fill(0).map((value,index)=>{
                                    return <Icon 
                                                color={this.whichStar(Math.round(this.getAverage(item)))}
                                                key={index}
                                                name='star'
                                                loose
                                                size={40}/>
                                })
                            }
                        </h2>
                            {item.showReviews?(
                              <Reviews showReviews={this.showReviews} item={item}/>
                              ):(<ReviewInput
                              icon={icon}
                              iconParent={iconParent} 
                              item={item} 
                              itemsReviewed={this.props.user.itemsPurchased}
                              reviewItemHandler={this.reviewItemHandler}
                              reviewChangeHandler={this.reviewChangeHandler}
                              emptyField={this.emptyField}
                              showReviews={this.showReviews}
                              starAmount={item.starAmount}
                              changeStars={this.changeStars}
                              changeMouseOverStars={this.changeMouseOverStars}
                              mouseOverStarAmount={item.mouseOverStarAmount}
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

/*const loadData = (mongoose) => {
        return new Promise((resolve,reject)=>{
            if(!mongoose){reject("you dont have the instance available")}
            mongoose.model("Item").find().populate({
                path:'itemReviews',
                populate:{path:'user',select:"name"}
            }).then(menu=>{resolve([
                    {
                    data: menu,
                    func: fetchMenu
                }
            ])
        })
    })

};
*/
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
    component: connect(mapStateToProps, {fetchMenu, getUser,updateMenu})(withRouter(withStyles(styles)(Menu))),
    loadData
}

