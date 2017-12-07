import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux";

import SignupForm from '../components/Forms/Signup'

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex'
    }
});

class SignUp extends Component {

    render() {
        let {classes} = this.props;
        return (
            <SignupForm onSubmit={() => alert('dale')}/>
        )
    }
}

const mapStateToProps = ({form: {signup}}) => {
    return {
        form: signup
    }
};

export default {
    component: connect(mapStateToProps, null)(withStyles(styles)(SignUp))
}

