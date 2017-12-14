import React from "react"

export function initializeMenu() {
    if (this.props.clientMenu) {
        this.setState({
            menu: this.props.clientMenu.map(menuItem => {
                return {...menuItem, currentReview: '', starAmount: 0, mouseOverStarAmount: 0}
            })
        })
    } else {

    }
}

export function updateMenu(nextprops) {
    if (nextprops.clientMenu) {
        this.setState({
            menu: nextprops.clientMenu.map(menuItem => {
                return {...menuItem, currentReview: '', starAmount: 0, mouseOverStarAmount: 0}
            })
        })
    } else {

    }
}


export function emptyMenuItem(item) {
    this.setState({
        menu: this.state.menu.map((itemValue) => {
            return itemValue.itemName !== item ? itemValue :
                {
                    ...itemValue,
                    currentReview: '',
                    showInput: false,
                    specialMessage: true,
                    starAmount: 0,
                    mouseOverStarAmount: 0
                };
        })
    })
}


