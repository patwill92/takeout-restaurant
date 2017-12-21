import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'

import SideMenu from './app/admin/components/SideMenu'
import SubNav from './app/admin/components/SubNav'
import NavBar from './app/admin/components/NavBar'
import {toggleSideNav} from "./actions";

const padding = {
    boxSizing: 'border-box !important',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
};

const styles = theme => ({
    '@global': {
        html: {
            minHeight: '100%'
        },
        body: {
            backgroundColor: '#f7f7f7 !important',
            backgroundImage: 'none !important',
            minHeight: '100%'
        }
    },
    gridParent: {
        display: 'grid',
        gridTemplateRows: '60px 1fr',
        gridTemplateColumns: '300px 1fr'
    },
    root: {
        gridColumn: 2,
        gridRow: 2,
        paddingTop: 30
    },
    topNav: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        boxShadow: theme.shadows[1],
        zIndex: 100,
        position: 'fixed',
        top: 0,
        minHeight: 50,
        width: '100%',
        padding: '0 20px',
        alignItems: 'center',
        '& *': {
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#d3d3d3',
            margin: 0,
            textDecoration: 'none'
        },
        gridColumn: '1/-1',
        gridRow: 1
    },
    '@media (min-width: 1200px)': {
        root: {
            width: '80%',
            maxWidth: '100% !important',
            ...padding
        },
    },
    '@media (min-width: 992px) and (max-width: 1199px)': {
        root: {
            width: '85%',
            maxWidth: '100% !important',
            ...padding
        }
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        root: {
            width: '90%',
            maxWidth: '100% !important',
            ...padding
        }
    },
    '@media (max-width: 767px)': {
        root: {
            paddingTop: 0,
            minWidth: '80%',
            maxWidth: '100% !important',
            gridColumn: '1/-1',
            gridRow: 2,
        }
    }
});

class Admin extends Component {
    render() {
        let {classes, subNav, route} = this.props;
        return (
            <div className={classes.gridParent} style={{height: '100%'}}>
                <NavBar/>
                <SideMenu/>
                <div className={classes.root}>
                    {subNav && <SubNav/>}
                    {renderRoutes(route.routes)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({menu, admin, sideNav}) => {
    return {
        menu,
        subNav: admin.subNav,
        sideNav
    }
};

export default {
    component: connect(mapStateToProps, {toggleSideNav})(withStyles(styles)(Admin))
}