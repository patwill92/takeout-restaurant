import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import withStyles from 'react-jss'

import Icon from '../Icon'
import Container from '../Container'

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary + ' !important',
        boxShadow: theme.shadows[2] + ' !important',
        position: 'fixed',
        zIndex: 101,
        margin: 0,
        width: '100%',
        top: 0,
        left: 0
    },
    nav: {
        borderRadius: 0 + ' !important',
        backgroundColor: 'inherit !important',
    },
    logo: {
        '&:hover': {
            cursor: 'pointer !important'
        }
    },
    menuItem: {
        textTransform: 'uppercase !important',
        fontWeight: 500 + ' !important',
        fontSize: '1.0rem !important',
        '&:hover': {
            backgroundColor: theme.palette.hoverPrimary
        }
    }
})

class NavBar extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Container >
                    <Menu inverted borderless size='huge' className={classes.nav}>
                        <Menu.Item className={classes.logo}>
                            <h3>{'Fork You'.toUpperCase()}</h3>
                        </Menu.Item>
                        <Menu.Item className={classes.menuItem} name='menu' active={activeItem === 'messages'}
                                   onClick={this.handleItemClick}/>
                        <Menu.Menu position='right'>
                            <Menu.Item className={classes.menuItem} active={activeItem === 'friends'}
                                       onClick={this.handleItemClick}>
                                Order <Icon style={{marginLeft: 5, bottom: 2}} color='#ffffff' name='utensilsAlt'/>
                            </Menu.Item>
                            <Menu.Item className={classes.menuItem} name='login' active={activeItem === 'friends'}
                                       onClick={this.handleItemClick}/>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar)