import React, {Component, Fragment} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'

import {fetchAdminTab, fetchAdminSubNav} from "../../../../actions";

const styles = theme => ({
    root: {}
});

class AdminMenu extends Component {
    componentDidMount = () => {
        console.log('FUCK');
        this.props.fetchAdminTab('users');
        this.props.fetchAdminSubNav('users');
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
    component: connect(mapStateToProps, {fetchAdminTab, fetchAdminSubNav})(withStyles(styles)(AdminMenu)),
    loadData
}