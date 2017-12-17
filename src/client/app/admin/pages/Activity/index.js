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
        this.props.fetchAdminTab('activity');
        this.props.fetchAdminSubNav('activity');
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
            data: 'activity',
            func: fetchAdminTab
        },
        {
            data: 'activity',
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