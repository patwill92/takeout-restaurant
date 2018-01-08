import React, {Component, Fragment} from 'react'
import ReviewInput from "./ReviewInput"
import Reviews from "./Reviews"
import withStyles from 'react-jss'
import {connect} from 'react-redux';
import axios from 'axios'
import {Link, withRouter} from "react-router-dom"
import {fetchMenu, fetchMenuAdmin, updateMenu, postReview, invalidInput} from "../../../../actions";
import Icon from '../../../components/Icon'
import ItemDetails from "./ItemDetails"
import Button from "./ReviewInput/Button"

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#f5f5f5',
            backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/e_colorize:100/v1511820883/45-degree-fabric-light_drgxti.png") !important',
        }
    },
    root: {
        width: '100%',
        display: 'flex'
    },
    item: {
        width: "300px",
        height: "300px",
        marginBottom: "20px",
        textAlign: "center",
        boxSizing: "border-box",
        borderRadius: "5%",
        overflow: "hidden",
        fontSize: "14px",
        boxShadow: "darkgrey 2px 2px 20px",
        backgroundColor: "transparent"
    },
    item2: {
        minWidth: "100%",
        minHeight: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundBlendMode: 'lighten',
        backgroundPosition: "center",
        backgroundSize: 'auto 100%',
        backgroundRepeat: "no-repeat"
    },

    addToCart: {
        border: 'none',
        outline: 'none',
        width: 'auto',
        border: 'solid 1px',
        borderRadius: "5%",
        cursor: "pointer",
        transition: "background-color ease-out 0.2s",
        "&:hover": {
            backgroundColor: "#e6e9ef"
        }
    },
    itemWrapper: {
        position: "relative",
        height: "50px",
        width: "100%",
        backgroundColor: "#ad1313"
    }
});

class Menu extends Component {

    reviewChangeHandler = (value, index) => {
        const newMenu = [...this.props.clientMenu]
        newMenu[index] = {...newMenu[index], currentReview: value}
        this.props.updateMenu({clientMenu: newMenu})
    }
    emptyField = async (item, index) => {
        const menuItemInQuestion = this.props.clientMenu[index];
        if (menuItemInQuestion.starAmount === 0 || !menuItemInQuestion.currentReview) {
            this.props.invalidInput(index, this.props.clientMenu, menuItemInQuestion)
        }
        else {
            this.props.postReview(menuItemInQuestion, this.props.user._id, index, this.props.clientMenu)
        }
    }

    render() {
        return (
            <div>
                {this.props.user ? null : (
                    <Link to={"/login"}><p style={{fontSize: "25px"}}>Login/SignUp to Review!</p></Link>)}
                {this.props.clientMenu.map((item, index) => {
                        return (
                            <Fragment>
                                <div key={item._id} className={this.props.classes.item}>
                                    <div className={this.props.classes.item2}>
                                        <div className={this.props.classes.itemWrapper}>
                                            <ItemDetails className={this.props.classes.addToCart} item={item}/>
                                        </div>
                                        <div style={{width: "100%", height: "100%"}}>
                                            <img style={{width: "100%", height: "auto"}} src={item.image} alt={item.name}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{position: "relative", width: "100%", minHeight: "60px", background: '#fff'}}>
                                    {!item.showReviews ? (
                                        <Reviews item={item}/>
                                    ) : (<ReviewInput
                                        item={item}
                                        index={index}
                                        reviewChangeHandler={this.reviewChangeHandler}
                                        emptyField={this.emptyField}
                                    />)}
                                </div>
                            </Fragment>
                        )
                    }
                )}
            </div>

        )
    }
}

const mapStateToProps = ({menu, user}) => {
    return {
        clientMenu: menu.clientMenu,
        user: user
    }
};

const loadData = async (mongoose) => {
    const menu = await mongoose.model("Item").find().populate({
        path: 'itemReviews',
        populate: {path: 'user', select: "name"}
    })
    return [
        {
            data: menu,
            func: fetchMenu
        }
    ]
};
export default {
    component: connect(mapStateToProps, {
        fetchMenu,
        updateMenu,
        postReview,
        invalidInput
    })(withRouter(withStyles(styles)(Menu))),
    loadData
}