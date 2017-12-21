import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Menu} from 'semantic-ui-react'

import Icon from '../../../components/Icon/index'
import data from './data/index'
import {toggleSideNav} from "../../../../actions/ui-actions/index";

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
    '@media (max-width: 767px)': {
        menu: {
            display: 'none !important'
        }
    },
    menu: {
        width: '300px !important',
        position: 'fixed !important',
        top: 60 + ' !important',
        background: '#edefef !important',
        border: 'none !important',
        borderRadius: 0 + ' !important',
        margin: 0 + ' !important',
        zIndex: 1,
        padding: '0 !important',
        gridColumn: 1,
        gridRow: '2/-1'
    }
});

const highlight = (state, tab, mobile) => {
    if (tab === state) {
        return mobile ? 'rgba(0,0,0,0.3)' : '#dbe0e0'
    }
    return !mobile ? '#edefef' : 'rgba(0,0,0,0.0)'
};

const MenuItem = props => {
    const {classes, name, link, icon, state, mobile, styles, toggle} = props;
    return (
        <Link
            onClick={toggle}
            className={styles ? styles : classes.menuItem}
            to={`${link}`}
            style={{backgroundColor: highlight(state, name, mobile)}}>
            <span><Icon style={{marginRight: 6}} color={!mobile ? '#2185d0' : '#d3d3d3'} name={icon}/> {name}</span>
        </Link>
    )
};

class SideMenu extends Component {
    toggleNav = (mobile) => {
        if(mobile) {
            this.props.toggleSideNav(false)
        }
    };
    render() {
        let {classes, tab, styles, mobile} = this.props;
        return (
            <Fragment>
                {!mobile ?
                    <Menu className={classes.menu} vertical style={{minHeight: '100%'}}>
                        {data.map(item => <MenuItem
                            toggle={() => this.toggleNav(mobile)}
                            state={tab}
                            classes={classes}
                            key={item.name}
                            {...item}/>)}
                    </Menu> :
                    data.map(item => (
                        <MenuItem
                            toggle={() => this.toggleNav(mobile)}
                            mobile={mobile}
                            styles={styles}
                            state={tab}
                            classes={classes}
                            key={item.name}
                            {...item}/>
                    ))}
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

export default connect(mapStateToProps, {toggleSideNav})(withStyles(styles)(SideMenu))