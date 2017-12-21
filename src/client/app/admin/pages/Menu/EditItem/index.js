import React, {Component, Fragment} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchMenu, fetchAdminActiveSubNav} from "../../../../../actions";
import MenuItem from './EditMenuItem'

const styles = theme => ({

});

class AdminEditItem extends Component {

    componentDidMount = () => {
        this.props.fetchAdminActiveSubNav('edit item');
        this.props.fetchMenu();
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
            data: 'edit item',
            func: fetchAdminActiveSubNav
        }
    ];
};

export default {
    component: connect(null, {
        fetchMenu,
        fetchAdminActiveSubNav
    })(withStyles(styles)(AdminEditItem)),
    loadData
}