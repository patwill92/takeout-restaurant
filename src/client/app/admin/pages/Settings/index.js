import React, {Component, Fragment} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'

import {fetchAdminTab, fetchAdminSubNav, fetchAdminActiveSubNav} from "../../../../actions";

const styles = theme => ({
    root: {}
});

class AdminSettings extends Component {
    componentDidMount = () => {
        this.props.fetchAdminTab('settings');
        this.props.fetchAdminSubNav('settings');
        this.props.fetchAdminActiveSubNav('website');
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
            data: 'settings',
            func: fetchAdminTab
        },
        {
            data: 'settings',
            func: fetchAdminSubNav
        },
        {
            data: 'website',
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
    component: connect(mapStateToProps, {fetchAdminTab, fetchAdminSubNav, fetchAdminActiveSubNav})(withStyles(styles)(AdminSettings)),
    loadData
}