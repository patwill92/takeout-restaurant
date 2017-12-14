import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Menu} from 'semantic-ui-react'

import Icon from '../../../components/Icon'
import data from './data/index'
import {fetchAdminTab} from "../../../actions/ui-actions";

const styles = theme => ({
    menuItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px 20px',
        textTransform: 'uppercase !important',
        fontWeight: 400 + ' !important',
        fontSize: '1.0rem !important',
        color: '#2185d0',
        borderBottom: '0.5px solid #dbe0e0',
        textDecoration: 'none !important',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    menu: {
        width: '300px !important',
        position: 'fixed !important',
        top: 50,
        background: '#edefef !important',
        border: 'none !important',
        borderRadius: 0 + ' !important',
        margin: 0,
        zIndex: 1,
        height: '100% !important',
        padding: '0 !important'
    }
});

const highlight = (state, tab) => {
    if(tab === state) {
        return '#dbe0e0'
    }
    return '#edefef'
};

const MenuItem = props => {
    const {classes, name, link, icon, state} = props;
    return (
        <Link
            className={classes.menuItem}
            to={`${link}`}
            style={{backgroundColor: highlight(state, name)}}>
            <span><Icon style={{marginRight: 6}} color='#2185d0' name={icon}/> {name}</span>
        </Link>
    )
};

class SideMenu extends Component {
    render() {
        let {classes, tab} = this.props;
        return (
            <Fragment>
                <Menu className={classes.menu} vertical>
                    {data.map(item => <MenuItem state={tab} classes={classes} key={item.name} {...item}/>)}
                </Menu>
                <Menu style={{minWidth: '300px', position: 'sticky', top: 50, background: 'transparent', border: 'none', margin: 0, zIndex: 0}} vertical/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({menu, admin}) => {
    return {
        menu,
        tab: admin.tab
    }
};

export default connect(mapStateToProps)(withStyles(styles)(SideMenu))