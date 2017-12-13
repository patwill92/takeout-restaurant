import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Menu} from 'semantic-ui-react'
import withStyles from 'react-jss'

import Icon from '../Icon'
import Container from '../Container'
import SideMenu from '../SideMenu'
import {toggleSideNav} from "../../actions";


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary + ' !important',
        boxShadow: theme.shadows[2] + ' !important',
        position: 'sticky',
        zIndex: 101,
        margin: 0,
        marginBottom: 30,
        width: '100%',
        top: 0,
        left: 0
    },
    nav: {
        borderRadius: 0 + ' !important',
        backgroundColor: 'inherit !important',
        border: '0 !important',
        '& *': {
            color: '#fff !important'
        },
        boxShadow: 'none !important'
    },
    logo: {
        '&:hover': {
            cursor: 'pointer !important'
        }
    },
    '@media (max-width: 768px)': {
        menuItemRight: {
            display: 'none !important',
        }

    },
    '@media (min-width: 769px)': {
        burgerMenu: {
            display: 'none !important',
            '& *': {
                pointerEvents: 'none !important'
            }
        }
    },
    menuItem: {
        textTransform: 'uppercase !important',
        fontWeight: 400 + ' !important',
        fontSize: '1.0rem !important',
        '&:hover': {
            backgroundColor: theme.palette.hoverPrimary + ' !important',
            cursor: 'pointer'
        }
    },
    menuItemRight: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        textTransform: 'uppercase !important',
        fontWeight: 400 + ' !important',
        fontSize: '1.0rem !important',
        '&:hover': {
            backgroundColor: theme.palette.hoverPrimary + ' !important',
            cursor: 'pointer'
        }
    },
    menuItemBurger: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px 16px',
        textTransform: 'uppercase !important',
        fontWeight: 400 + ' !important',
        fontSize: '1.0rem !important',
        color: '#fff !important',
        textDecoration: 'none !important'
    },
    imgContainer: {
    }
})

class NavBar extends Component {
    state = {
        activeItem: 'home'
    };

    toggleVisibility = () => this.props.toggleSideNav(!this.props.sideNav);

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    renderNav = (user, classes, type) => {
        switch(type) {
            case 'desktop':
                switch(user) {
                    case null: return '';
                    case false: return (
                        <Fragment>
                            <Link className={classes.menuItemRight} to='/login' >login</Link>
                            <Link className={classes.menuItemRight} to='/signup' >signup</Link>
                        </Fragment>
                    );
                    default: return (
                        <a className={classes.menuItemRight} style={{textDecoration: 'none', color: '#fff'}} href='/user/logout'>logout</a>
                    )
                }
            case 'mobile' :
                switch(user) {
                    case null: return '';
                    case false: return (
                        <Fragment>
                            <div className={classes.imgContainer} style={{padding: 20}}>
                                <img style={{width: '100%', height: 'auto'}}
                                     src="http://res.cloudinary.com/daj4m3xio/image/upload/v1513110298/forkit_pubkag.png" alt="forkit"/>
                            </div>
                            <Link onClick={() => this.props.toggleSideNav(false)} className={classes.menuItemBurger} to='/' >Menu</Link>
                            <Link onClick={() => this.props.toggleSideNav(false)} className={classes.menuItemBurger} to='/login' >login</Link>
                            <Link onClick={() => this.props.toggleSideNav(false)} className={classes.menuItemBurger} to='/signup' >signup</Link>
                        </Fragment>
                    );
                    default: return (
                        <Fragment>
                            <div className={classes.imgContainer} style={{padding: 20}}>
                                <img style={{width: '100%', height: 'auto'}}
                                     src="http://res.cloudinary.com/daj4m3xio/image/upload/v1513110298/forkit_pubkag.png" alt="forkit"/>
                            </div>
                            <Link onClick={() => this.props.toggleSideNav(false)} className={classes.menuItemBurger} to='/' >Menu</Link>
                            <a className={classes.menuItemBurger} style={{textDecoration: 'none', color: '#fff'}} href='/user/logout'>logout</a>
                        </Fragment>
                    )
                }
        }
    };

    render() {
        let {activeItem} = this.state;
        let {classes} = this.props;
        let inactiveBackground = !this.props.sideNav ? {
            backgroundColor: 'rgba(0,0,0,0)'
        } : {};
        return (
            <div className={classes.root}>
                <SideMenu animation='overlay' sideNav={this.props.sideNav} background={'rgba(0,0,0,0.8)'}>
                    {this.renderNav(this.props.user, classes, 'mobile')}
                </SideMenu>
                <Container>
                    <Menu borderless size='huge' className={classes.nav}>
                        <Menu.Item className={classes.logo}>
                            <Link to='/'><h3>{'Forkit'.toUpperCase()}</h3></Link>
                        </Menu.Item>
                        <Menu.Item className={classes.menuItemRight} name='menu'
                                   onClick={this.handleItemClick}/>
                        <Menu.Menu position='right'>
                            <Menu.Item className={classes.menuItemRight} active={activeItem === 'friends'}
                                       onClick={this.handleItemClick}>
                                Order <Icon style={{marginLeft: 5, bottom: 2}} color='#ffffff' name='utensilsAlt'/>
                            </Menu.Item>
                            {this.renderNav(this.props.user, classes, 'desktop')}
                            <Menu.Item id='burger' style={{bottom: 2, ...inactiveBackground}} active={this.props.sideNav}
                                       className={classes.burgerMenu} onClick={this.toggleVisibility}>
                                <h3><Icon color='#ffffff' name='bars'/></h3>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({sideNav, user}) => {
    return {
        sideNav,
        user
    }
};

export default connect(mapStateToProps, {toggleSideNav})(withStyles(styles)(NavBar))