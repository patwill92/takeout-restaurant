import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchAdminTab} from "../../../../actions/index";
import EditMenuForm from './EditMenu'


const styles = theme => ({
    root: {}
});

class AdminMenu extends Component {
    componentDidMount = () => {
        this.props.fetchAdminTab('menu')
    };
    render() {
        let {classes} = this.props;
        return (
            <EditMenuForm/>
        )
    }
}

const loadData = () => [{data: 'menu', func: fetchAdminTab}];

const mapStateToProps = ({menu, admin}) => {
    return {
        menu,
        tab: admin.tab
    }
};

export default {
    component: connect(mapStateToProps, {fetchAdminTab})(withStyles(styles)(AdminMenu)),
    loadData
}