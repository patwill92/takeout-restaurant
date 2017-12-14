import React from "react"

export const promptReviewOfferConditionally = ({itemsReviewed, item, reviewItemHandler}) => {
    return itemsReviewed.includes(item._id) ?
        <button style={{padding: "10px", margin: "5px"}} onClick={() => reviewItemHandler(item.itemName)}>
            Tell us what you thought!
        </button> : null
}
export const renderReviewsButtonConditionally = ({item, showReviews}) => {
    return item.reviews.length ? (
        <button style={{padding: "10px", margin: "15px"}} onClick={() => showReviews(item.itemName)}>
            Show Reviews({item.reviews.length})
        </button>) : <button disabled style={{padding: "10px", margin: "15px"}}>No reviews yet</button>
}

export const renderInputReviewFieldsDynamically = ({renderedStars, reviewChangeHandler, item, emptyField, reviewItemHandler}) => {
    return item.showInput ?
        (<div>
            <div>
                {renderedStars}
            </div>
            <textarea cols={60} rows={20}
                      onChange={(event) => {
                          event.target.value.endsWith("\n") ?
                              (confirm("would you like to submit?") ? emptyField(item.itemName) : null) : null;
                          reviewChangeHandler(item.itemName, event.target.value)
                      }}
                      style={{margin: "5px", fontSize: "20px"}}
                      placeholder={" write your review here "}
                      value={item.currentReview}/>
            <br/>
            <button style={{padding: "10px", margin: "5px"}}
                    onClick={() => emptyField(item.itemName)}>
                Submit
            </button>
            <button style={{padding: "10px", margin: "5px"}}
                    onClick={() => reviewItemHandler(item.itemName)}>
                Cancel
            </button>
        </div>) : null
}

export const sayThankYouFor6thOfSecondAfterSubmission = ({item}) => {
    return item.specialMessage ? item.specialMessageValue ? (<h1>{item.specialMessageValue}</h1>) : (
        <h1>Thank You</h1>) : null
}

export function sayThankYouFor6thOfSecondAfterSubmissionDelay(item, time = 600) {
    setTimeout(() => {
        this.setState({
            menu: this.state.menu.map((itemValue) => {
                return itemValue.itemName !== item ? itemValue : {
                    ...itemValue,
                    specialMessage: false,
                    specialMessageValue: ""
                }
            })
        })
    }, time)
}

export function changeReviewInputStateForOneMenuItemComponent(item) {
    this.setState({
        menu: this.state.menu.map((itemValue) => {
            return itemValue.itemName !== item ? itemValue : {...itemValue, showInput: !itemValue.showInput}
        })
    })
}

export function updateReviewInputValueForOneMenuItem(item, value) {
    this.setState({
        menu: this.state.menu.map((itemValue) => {
            return itemValue.itemName !== item ? itemValue : {...itemValue, currentReview: value}
        })
    })
}

export function makeReviewsVisibleToTheUser(item) {
    this.setState({
        menu: this.state.menu.map((itemValue) => {
            return itemValue.itemName !== item ? itemValue : {
                ...itemValue,
                showReviews: !itemValue.showReviews,
                showInput: false
            }
        })
    })
}

export function toggleBetweenShowingReviewsAndShowingSelectionButtons(item, Reviews, ReviewInput, icon, iconParent) {
    return item.showReviews ? (
        <Reviews showReviews={this.showReviews} item={item}/>
    ) : (<ReviewInput
        icon={icon}
        iconParent={iconParent}
        item={item}
        itemsReviewed={this.props.user ? this.props.user.itemsPurchased : []}
        reviewItemHandler={this.reviewItemHandler}
        reviewChangeHandler={this.reviewChangeHandler}
        emptyField={this.emptyField}
        showReviews={this.showReviews}
        starAmount={item.starAmount}
        changeStars={this.changeStars}
        changeMouseOverStars={this.changeMouseOverStars}
        mouseOverStarAmount={item.mouseOverStarAmount}
    />)

}

export function apiCallAddReview(axios, item) {
    let index = null
    const menuItemInQuestion =
        this.state.menu.filter(function (itemValue, indexValue) {
            index = index ? index : (itemValue.itemName === item ? indexValue : null);
            return itemValue.itemName === item
        })[0]
    if (menuItemInQuestion.starAmount === 0) return {menuItemInQuestion, index}
    if (!menuItemInQuestion.currentReview) return {menuItemInQuestion, index}
    axios.post("/api/addreview", {
        content: menuItemInQuestion.currentReview,
        rating: menuItemInQuestion.starAmount,
        user: this.props.user._id,
        item: menuItemInQuestion._id
    }).then((response) => {
        console.log(response)
        this.props.fetchMenu();
    }).catch((error) => console.log(error))
}