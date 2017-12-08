import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"

const styles = theme => ({
    root: {

    }
});

class Login extends Component {

    render() {
        let {classes} = this.props;
        return (
            <div>
                <h1>LOGIN PAGE</h1>
            </div>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form
    }
};

export default {
    component: connect(mapStateToProps, null)(withStyles(styles)(Login))
}

