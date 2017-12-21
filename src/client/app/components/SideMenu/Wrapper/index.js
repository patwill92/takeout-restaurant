import React, {Component} from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'

import {toggleSideNav, fetchMenuAdmin} from "../../../../actions/index";

const styles = {
    root: {
        height: '100vh !important',
        '& div *': {
            pointerEvents: 'none !important'
        }
    }
}

class Wrapper extends Component {
    state = {
        document: false
    };

    componentDidMount = () => {
        this.setState({document: true})

    };

    handleClickOutside = (event) => {
        let a = event.target.parentNode.id === this.wrapperRef.id;
        let b = this.wrapperRef.id === event.target.id;
        let burgerEvent = event.target.id === 'burger' || event.target.parentNode.parentNode.id === 'burger';
        if (!(a || b)) {
            if(!burgerEvent) {
                this.props.toggleSideNav(false)
                document.querySelector('#root').removeEventListener('mousedown', this.handleClickOutside);
            } else {
                document.querySelector('#root').removeEventListener('mousedown', this.handleClickOutside);
            }
        }
    };

    render() {
        let {classes} = this.props;
        if(this.props.sideNav) {
            document.querySelector('#root').addEventListener('mousedown', this.handleClickOutside);
        }
        return (
            <div id='wrapper' className={classes.root} ref={(node) => this.wrapperRef = node}>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = ({sideNav}) => {
    return {
        sideNav
    }
}

export default connect(mapStateToProps, {toggleSideNav, fetchMenuAdmin})(withStyles(styles)(Wrapper))