import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'

import Container from './components/Container/index'
import Icon from './components/Icon/index'
import SideMenu from './components/admin/SideMenu'
import SubNav from './components/admin/SubNav'

const padding = {
    boxSizing: 'border-box !important',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
}

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#f7f7f7 !important',
            backgroundImage: 'none !important',
        }
    },
    gridParent: {
        display: 'grid',
        gridTemplateRows: '50px 1fr',
        gridTemplateColumns: '300px 1fr'
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
            width: '70%',
            maxWidth: '100% !important',
            ...padding
        }
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
    }
});

class Admin extends Component {
    render() {
        let {classes, subNav, route} = this.props;
        console.log(subNav);
        return (
            <div className={classes.gridParent} style={{height: '100%'}}>
                <div className={classes.topNav}>
                    <Link to='/'><h3>Forkit</h3></Link>
                    <a href='/user/logout'><h5>Logout <Icon style={{marginLeft: 3}} color='#d3d3d3' name='powerOff'/>
                    </h5></a>
                </div>
                <SideMenu/>
                <div className={classes.root}>
                    {subNav && <SubNav/>}
                    {renderRoutes(route.routes)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({menu, admin}) => {
    return {
        menu,
        subNav: admin.subNav
    }
};

export default {
    component: connect(mapStateToProps)(withStyles(styles)(Admin))
}