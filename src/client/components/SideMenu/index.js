import React, {Component} from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import {Sidebar, Menu} from 'semantic-ui-react'


import Wrapper from './Wrapper/index'
import Icon from '../Icon/index'

const styles = theme => ({
    root: {
        '&::-webkit-scrollbar': {
            'backgroundColor': 'rgba(0,0,0,0) !important'
        },
        '& #wrapper': {
            backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/v1511822287/black-linen_vglyyw.png") !important',
            backgroundColor: 'rgba(0,0,0,0.8)'
        },
        boxShadow: theme.shadows[20] + ' !important'
    },
    '@media (min-width: 501px)': {
        root: {
            width: '350px !important'
        }
    },
    '@media (max-width: 500px)': {
        root: {
            width: '60% !important'
        }
    }
});

class SidebarLeftOverlay extends Component {
    render() {
        let {classes, sideNav, animation} = this.props;
        return (
            <Sidebar
                style={{border: 0}}
                className={classes.root}
                as={Menu}
                animation={animation}
                visible={sideNav}
                icon='labeled'
                vertical>
                <Wrapper>
                    {this.props.children}
                </Wrapper>
            </Sidebar>
        )
    }
}

export default withStyles(styles)(SidebarLeftOverlay)