import React from "react"
import Icon from '../../../../../components/Icon'

export const whichStar = (amountOfStars) => {
    switch (amountOfStars) {
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


export const renderStarsDynamically = ({list, item, changeMouseOverStars, changeStars, mouseOverStarAmount, starAmount, icon, iconParent}) => {
    return (<div className={iconParent}>{list.map((num) => (
        <div key={num + item.itemName}
             onMouseEnter={(event) => {
                 changeMouseOverStars(num, item.itemName)
             }}
             onMouseLeave={() => changeMouseOverStars(0, item.itemName)}
             onClick={() => changeStars(num, item.itemName)}
             className={icon}
             style={{display: 'inline-block', "margin": "5px"}}
        >
            <Icon
                color={mouseOverStarAmount ?
                    (mouseOverStarAmount >= num ?
                        whichStar(mouseOverStarAmount) : "") :
                    starAmount >= num ? whichStar(starAmount) : ""}
                name='star'
                loose
                size={30}/>
        </div>

    ))}</div>)
}
export const generateStaticStarRating = (amount) => {
    return Array(Math.round(amount)).fill(0).map((value, index) => {
        return <Icon color={whichStar(Math.round(amount))}
                     key={Date.now() / index}
                     name='star'
                     loose
                     size={40}/>
    })
}

export function changeAmountOfMouseOverStarsForOneMenuItem(num, fieldName) {
    this.setState({
        menu: this.state.menu.map((menuItem) => {
            return menuItem.itemName === fieldName ? {...menuItem, mouseOverStarAmount: num} : menuItem;
        })
    })
}

export function changeAmountOfActualStarsForOneMenuItem(num, fieldName) {
    this.setState({
        menu: this.state.menu.map((menuItem) => {
            return menuItem.itemName === fieldName ? {...menuItem, starAmount: num} : menuItem;
        })
    })
}