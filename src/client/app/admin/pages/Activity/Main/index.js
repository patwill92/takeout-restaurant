import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchMenu, fetchAdminActiveSubNav} from "../../../../../actions";

const styles = theme => ({
    root: {

    }
});

class AvtivityOverview extends Component {

    componentDidMount = () => {
        this.props.fetchAdminActiveSubNav('orders')
    };

    render() {
        let {classes, form} = this.props;
        return (
            <Fragment>
                <h1>Activity OVERVIEW</h1>
            </Fragment>
        )
    }
}

const loadData = (mongoose) => {
    return [
        {
            data: 'orders',
            func: fetchAdminActiveSubNav
        }
    ];
};

export default {
    component: connect(null, {fetchMenu, fetchAdminActiveSubNav})(withRouter(withStyles(styles)(AvtivityOverview))),
    loadData
}