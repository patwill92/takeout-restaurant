import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu} from 'semantic-ui-react'
import withStyles from 'react-jss'

import Icon from '../Icon'
import Container from '../Container'
import SideMenu from './SideMenu'
import Wrapper from './SideMenu/Wrapper/index'
import {toggleSideNav} from "../../actions/index";


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
        fontWeight: 500 + ' !important',
        fontSize: '1.0rem !important',
        '&:hover': {
            backgroundColor: theme.palette.hoverPrimary
        }
    },
    menuItemRight: {
        textTransform: 'uppercase !important',
        fontWeight: 500 + ' !important',
        fontSize: '1.0rem !important',
        '&:hover': {
            backgroundColor: theme.palette.hoverPrimary
        }
    },
})

class NavBar extends Component {
    state = {
        activeItem: 'home'
    }

    toggleVisibility = () => this.props.toggleSideNav(!this.props.sideNav);

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        let {activeItem} = this.state;
        let {classes} = this.props;
        let inactiveBackground = !this.props.sideNav ? {
            backgroundColor: 'rgba(0,0,0,0)'
        } : {};
        return (
            <div className={classes.root}>
                <SideMenu/>
                <Container>
                    <Menu borderless size='huge' className={classes.nav}>
                        <Menu.Item className={classes.logo}>
                            <h3>{'Forkit'.toUpperCase()}</h3>
                        </Menu.Item>
                        <Menu.Item className={classes.menuItem} name='menu' active={activeItem === 'messages'}
                                   onClick={this.handleItemClick}/>
                        <Menu.Menu className={classes.rightMenu} position='right'>
                            <Menu.Item className={classes.menuItemRight} active={activeItem === 'friends'}
                                       onClick={this.handleItemClick}>
                                Order <Icon style={{marginLeft: 5, bottom: 2}} color='#ffffff' name='utensilsAlt'/>
                            </Menu.Item>
                            <Menu.Item className={classes.menuItemRight} name='login' active={activeItem === 'friends'}
                                       onClick={this.handleItemClick}/>
                            <Menu.Item id='burger' style={{bottom: 2, ...inactiveBackground}} active={this.props.sideNav} className={classes.burgerMenu}
                                       onClick={this.toggleVisibility}>
                                <h3><Icon color='#ffffff' name='bars'/></h3>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({sideNav}) => {
    return {
        sideNav
    }
};

export default connect(mapStateToProps, {toggleSideNav})(withStyles(styles)(NavBar))