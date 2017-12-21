import React, {Component, Fragment} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'

import {fetchAdminTab, fetchAdminSubNav, fetchMenu} from "../../../../actions";

const styles = theme => ({
    root: {}
});

class AdminMenu extends Component {
    componentDidMount = () => {
        this.props.fetchMenu();
        this.props.fetchAdminTab('menu');
        this.props.fetchAdminSubNav('menu');
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

const loadData = async (mongoose) => {
    const menu = await mongoose.model("Item").find({});
    return [
        {
            data: menu,
            func: fetchMenu
        },
        {
            data: 'menu',
            func: fetchAdminTab
        },
        {
            data: 'menu',
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
    component: connect(mapStateToProps, {fetchAdminTab, fetchAdminSubNav, fetchMenu})(withStyles(styles)(AdminMenu)),
    loadData
}