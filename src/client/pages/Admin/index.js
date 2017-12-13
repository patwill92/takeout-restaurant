import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Menu, Button} from 'semantic-ui-react'

import EditMenu from './EditMenu'
import SideMenu from '../../components/SideMenu'
import Container from '../../components/Container'
import Icon from '../../components/Icon'
import Dashboard from './Dashboard'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    menuItem: {
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
});

class Admin extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root} style={{minHeight: 'inherit'}}>
                <Menu style={{width: '300px', position: 'sticky', top: 0}} fixed='left' vertical>
                    <div style={{padding: 10, textAlign: 'center'}}>
                        <img style={{width: '150px', height: 'auto'}}
                             src="http://res.cloudinary.com/daj4m3xio/image/upload/v1513110298/forkit_pubkag.png"
                             alt="forkit"/>
                    </div>
                    <Link className={classes.menuItem} to='/menu'>Menu</Link>
                    <Link onClick={() => this.props.toggleSideNav(false)} className={classes.menuItem}
                          to='/login'>login</Link>
                    <Link className={classes.menuItem} to='/signup'>signup</Link>
                </Menu>
                <Container >
                    <Dashboard/>
                </Container>
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
    component: connect(mapStateToProps)(withStyles(styles)(Admin))
}