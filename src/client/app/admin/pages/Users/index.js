import React, {Component, Fragment} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'

import {fetchAdminTab, fetchAdminSubNav, fetchAdminActiveSubNav} from "../../../../actions";

const styles = theme => ({
    root: {}
});

class AdminMenu extends Component {
    componentDidMount = () => {
        this.props.fetchAdminTab('users');
        this.props.fetchAdminSubNav('users');
        this.props.fetchAdminActiveSubNav('users');
    };

    render() {
        let {classes, route} = this.props;
        return (
            <Fragment>
                {renderRoutes(route.routes)}
            </Fragment>
        )
    }
}

const loadData = (mongoose) => {
    return [
        {
            data: 'users',
            func: fetchAdminTab
        },
        {
            data: 'users',
            func: fetchAdminSubNav
        },
        {
            data: 'users',
            func: fetchAdminActiveSubNav
        }
    ];
};

const mapStateToProps = ({menu, admin}) => {
    return {
        menu,
        tab: admin.tab
    }
};

export default {
    component: connect(mapStateToProps, {fetchAdminTab, fetchAdminSubNav, fetchAdminActiveSubNav})(withStyles(styles)(AdminMenu)),
    loadData
}