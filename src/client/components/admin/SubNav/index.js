import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Input, Segment } from 'semantic-ui-react'
import withStyles from 'react-jss'
import {connect} from 'react-redux'

import {fetchAdminActiveSubNav} from "../../../actions";

const font = {
    textTransform: 'uppercase !important',
    fontWeight: 400 + ' !important',
    fontSize: '0.9rem',
    '&:hover': {
        cursor: 'pointer'
    }
};

const styles = theme => ({
    tabs: {
        ...font
    },
    active: {
        ...font,
        backgroundColor: theme.palette.admin.blue + ' !important',
        color: '#fff !important',
        '&::after': {
            backgroundColor: theme.palette.admin.blue + ' !important',
        }
    },
    link: {
        display: 'flex !important',
        borderRadius: 3 + ' !important'
    }
});

class Subnav extends Component {
    render() {
        let {classes, subNav, activeItem, tab} = this.props;
        return (
            <Menu pointing style={{borderRadius: 3, minHeight: 50}}>
                {subNav.map((item, i) => {
                    const active = activeItem === item;
                    let link = item === 'menus' ? '' : '/' + item.split(' ').join('');
                    return (
                        <Link className={classes.link} key={item + i} to={`/${tab + link}`}>
                            <Menu.Item
                                className={active ? classes.active : classes.tabs}
                                name={item}
                                active={active}
                                style={{borderTopLeftRadius: i===0 && 3, borderBottomLeftRadius: i===0 && 3}}/>
                        </Link>
                    )
                })}
            </Menu>
        )
    }
}

const mapStateToProps = ({admin}) => {
    return {
        tab: admin.tab,
        subNav: admin.subNav,
        activeItem: admin.activeSubNav
    }
};

export default connect(mapStateToProps, {fetchAdminActiveSubNav})(withStyles(styles)(Subnav))