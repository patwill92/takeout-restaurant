import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchMenu, fetchAdminActiveSubNav} from "../../../../../actions";

const styles = theme => ({
    root: {

    }
});

class MenuOverview extends Component {

    componentDidMount = () => {
        this.props.fetchAdminActiveSubNav('menus')
    };

    render() {
        let {classes, form} = this.props;
        return (
            <Fragment>
                <h1>OVERVIEW</h1>
            </Fragment>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form: form.addItem
    }
};

const loadData = (mongoose) => {
    return [
        {
            data: 'menus',
            func: fetchAdminActiveSubNav
        }
    ];
};

export default {
    component: connect(mapStateToProps, {fetchMenu, fetchAdminActiveSubNav})(withRouter(withStyles(styles)(MenuOverview))),
    loadData
}