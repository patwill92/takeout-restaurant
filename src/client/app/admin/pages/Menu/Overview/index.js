import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchMenu, fetchAdminActiveSubNav} from "../../../../../actions";
import MenuItem from '../../../../components/MenuItem'

const styles = theme => ({

});

class MenuOverview extends Component {

    componentDidMount = () => {
        this.props.fetchAdminActiveSubNav('menus');
        this.props.fetchMenu();
    };

    render() {
        let {classes} = this.props;
        return (
            <Fragment>
                {['savory', 'sweet'].map((item, i) => <MenuItem type={item} key={i} menu={this.props.menu} categoryDriven admin/>)}
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
//this was changed by me patrick, I needed to make sure that the menuItem was a reusable component
const mapStateToProps = ({menu}) => {
    return {
        menu: menu.clientMenu
    }
};
export default {
    component: connect(mapStateToProps, {
        fetchMenu,
        fetchAdminActiveSubNav
    })(withStyles(styles)(MenuOverview)),
    loadData
}