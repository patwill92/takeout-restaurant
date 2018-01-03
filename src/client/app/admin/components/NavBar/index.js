import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import Icon from '../../../components/Icon/index'
import SideNav from '../../../components/SideMenu/index'
import SideMenu from '../SideMenu/index'
import {toggleSideNav,getUser} from "../../../../actions/index";

const styles = theme => ({
    '@media (max-width: 767px)': {
        logout: {
            display: 'none !important',
        }
    },
    '@media (min-width: 768px)': {
        burgerMenu: {
            display: 'none !important',
            '& *': {
                pointerEvents: 'none !important'
            }
        }
    },
    topNav: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        boxShadow: theme.shadows[1],
        zIndex: 100,
        position: 'fixed',
        top: 0,
        minHeight: 60,
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
    navItem: {
        textAlign: 'left',
        display: 'block',
        padding: 20
    },
});

class AdminNavBar extends Component {
    toggleVisibility = () => this.props.toggleSideNav(!this.props.sideNav);

    render() {
        let {classes} = this.props;
        return (
            <div className={classes.topNav} id='adminNavbar'>
                <SideNav animation='overlay' sideNav={this.props.sideNav} background={'rgba(0,0,0,0.8)'}>
                    <SideMenu
                        mobile
                        styles={classes.navItem} />
                    <a className={classes.navItem} href='/user/logout'>
                        <h5>Logout
                            <Icon style={{marginLeft: 3}} color='#d3d3d3' name='powerOff'/>
                        </h5>
                    </a>
                </SideNav>
                <Link to='/' onClick={()=>this.props.getUser()}><h3>Forkit</h3></Link>
                <a href='/user/logout' className={classes.logout}>
                    <h5>Logout
                        <Icon style={{marginLeft: 3}} color='#d3d3d3' name='powerOff'/>
                    </h5>
                </a>
                <div id='burger' onClick={this.toggleVisibility} className={classes.burgerMenu}>
                    <h3><Icon color='#ffffff' name='bars'/></h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({sideNav}) => {
    return {
        sideNav
    }
};

export default connect(mapStateToProps, {toggleSideNav,getUser})(withStyles(styles)(AdminNavBar))