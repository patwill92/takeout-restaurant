import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"

import {fetchMenu, fetchAdminActiveSubNav} from "../../../../../actions";
import MenuItem from './MenuItem'

class MenuOverview extends Component {

    componentDidMount = () => {
        this.props.fetchAdminActiveSubNav('menus');
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
            data: 'menus',
            func: fetchAdminActiveSubNav
        }
    ];
};

export default {
    component: connect(null, {
        fetchMenu,
        fetchAdminActiveSubNav
    })(MenuOverview),
    loadData
}