import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Card} from 'semantic-ui-react'

import {fetchTestMenu} from "../../../../actions/menu-actions";


const styles = theme => ({
    root: {}
});

class TestMenu extends Component {
    componentDidMount = () => {
        this.props.fetchTestMenu()
    }

    render() {
        let {classes, menu} = this.props;
        console.log(menu);
        return (
            <div style={{margin: 0, width: '100%', display: 'flex', justifyContent: 'center'}}>
                {menu.testMenu && menu.testMenu.map(item => {
                    console.log(item.reviews);
                    return (
                        <Card key='menu'
                              style={{padding: 20, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
                              color='red'>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h3 style={{marginBottom: 20, marginTop: 0}}>{item.name}</h3>
                                <h3 style={{marginBottom: 20, marginTop: 0, fontWeight: 400}}>${item.price}</h3>
                            </div>
                            <img style={{width: '100%', height: 'auto', marginBottom: 10}} src={item.image} alt=""/>
                            <p>{item.description}</p>
                            <strong>Average Rating: {item.reviews.reduce((accumulator, current, i) => {
                                console.log(i);
                                if (i === 1) {
                                    accumulator = accumulator.rating;
                                    return accumulator + current.rating
                                }
                                return accumulator + current.rating
                            }) / item.reviews.length}</strong>
                            <strong>Reviews: </strong>
                            <div>
                                {
                                    item.reviews.map((review, i) => {
                                        return (
                                            <div style={{
                                                marginBottom: 10,
                                                marginTop: 10,
                                                border: '1px solid blue',
                                                padding: 10
                                            }} key={i}>
                                                <p><strong>User:</strong> {review.user.name}</p>
                                                <p><strong>Rating:</strong> {review.rating}</p>
                                                <p><strong>Review:</strong> {review.content}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = ({menu}) => {
    return {
        menu
    }
};

export default {
    component: connect(mapStateToProps, {fetchTestMenu})(withStyles(styles)(TestMenu))
}