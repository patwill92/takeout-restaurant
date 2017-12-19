import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchAdminActiveSubNav} from "../../../../../actions";
import MenuItem from './MenuItem'

const styles = theme => ({

});

class MenuOverview extends Component {

    componentDidMount = () => {
        this.props.fetchAdminActiveSubNav('menus');
    };

    render() {
        let {classes} = this.props;
        return (
            <Fragment>
                {['savory', 'sweet'].map((item, i) => <MenuItem type={item} key={i}/>)}
            </Fragment>
        )
    }
}

const loadData = (mongoose) => {
    return [
        {
            data: 'menus',
            func: fetchAdminActiveSubNav
        }
    ];
};

export default {
    component: connect(null, {
        fetchAdminActiveSubNav
    })(withStyles(styles)(MenuOverview)),
    loadData
}