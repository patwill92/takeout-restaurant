import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import axios from 'axios'

import SignupForm from '../components/Forms/Signup'
import {getUser} from "../../actions/auth-actions"

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex'
    }
});

class SignUp extends Component {
    signUp = async (user) => {
        try {
            let {data} = await axios.post('/user/signup', user);
            if(!data.errors) {
                return this.props.history.push('/');
            }
        } catch(e) {
            console.log(e.response.data);
        }
    };
    render() {
        let {classes} = this.props;
        return (
            <SignupForm onSubmit={() => this.signUp(this.props.form.values)}/>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form: form.signup
    }
};

export default {
    component: connect(mapStateToProps, null)(withRouter(withStyles(styles)(SignUp)))
}

