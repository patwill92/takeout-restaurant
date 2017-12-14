import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {renderRoutes} from 'react-router-config'
import {Menu, Button} from 'semantic-ui-react'

import {fetchAdminTab} from "./actions/ui-actions/index";
import Container from './components/Container/index'
import Icon from './components/Icon/index'
import SideMenu from './components/admin/SideMenu'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#f7f7f7 !important',
            backgroundImage: 'none !important',
        }
    },
    root: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    topNav: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        boxShadow: theme.shadows[1],
        zIndex: 100,
        position: 'sticky',
        top: 0,
        height: 50,
        width: '100%',
        padding: '0 20px',
        alignItems: 'center',
        '& *': {
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#d3d3d3',
            margin: 0,
            textDecoration: 'none'
        }
    }
});

class Admin extends Component {
    state = {
        tab: 'dashboard'
    };

    switchTab = (tab) => {
        this.setState({tab})
    };

    render() {
        let {classes, tab, route} = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
                <div className={classes.topNav}>
                    <Link to='/'><h3>Forkit</h3></Link>
                    <a href='/user/logout'><h5>Logout <Icon style={{marginLeft: 3}} color='#d3d3d3' name='powerOff'/></h5></a>
                </div>
                <div className={classes.root} style={{minHeight: 'inherit'}}>
                    <SideMenu/>
                    <Container>
                        {renderRoutes(route.routes)}
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({menu}) => {
    return {
        menu
    }
};

export default {
    component: connect(mapStateToProps, {fetchAdminTab})(withStyles(styles)(Admin))
}