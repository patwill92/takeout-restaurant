import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Menu, Button, Card} from 'semantic-ui-react'


const styles = theme => ({
    root: {}
});

class Dashboard extends Component {
    render() {
        let {classes} = this.props;
        return (
            <Card.Group itemsPerRow={4} style={{margin: 0}}>
                <Card style={{paddingBottom: 100}} color='red'/>
                <Card style={{paddingBottom: 100}} color='orange'/>
                <Card style={{paddingBottom: 100}} color='yellow'/>
                <Card style={{paddingBottom: 100}} color='olive'/>
            </Card.Group>
        )
    }
}

const mapStateToProps = ({menu}) => {
    return {
        menu
    }
};

export default withStyles(styles)(Dashboard)