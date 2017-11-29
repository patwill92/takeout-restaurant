import React, {Component} from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import {Sidebar, Menu} from 'semantic-ui-react'


import Wrapper from './Wrapper'
import Icon from '../../Icon'

const styles = theme => ({
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
    componentWillUnmount = () => {
        console.log('UNMOUNTED');
    }

    render() {
        let {classes, sideNav} = this.props;
        return (
            <Sidebar className={classes.root} as={Menu} animation='overlay' visible={sideNav}
                     icon='labeled' vertical inverted>
                <Wrapper>
                    <div name='home'>
                        <p style={{color: '#fff'}}>Home</p>
                    </div>
                    <div name='home'>
                        <p style={{color: '#fff'}}>Menu</p>
                    </div>
                    <div name='home'>
                        <p style={{color: '#fff'}}>About</p>
                    </div>
                    <div name='home'>
                        <p style={{color: '#fff'}}>Order Now</p>
                    </div>
                </Wrapper>
            </Sidebar>
        )
    }
}

const mapStateToProps = ({sideNav}) => {
    return {
        sideNav
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(SidebarLeftOverlay))