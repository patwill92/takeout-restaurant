import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"

import LoginForm from '../../components/LoginForm'
import FormWrapper from '../../components/FormWrapper'

const Login = props => {
    return (
        <FormWrapper
            image={'http://www.seriouseats.com/images/2014/09/20140929-salmon-burger-yasmin-recipe-7.jpg'}
            heading={'Welcome back!'}
            subHeading={"Let's get you logged in."}
            sideHeading={'New Here?'}
            sideSubHeading={'What are you waiting for? Sign up with us and see what the fuss is all about!'}
            formType={'sign up'}
        >
            <LoginForm/>
        </FormWrapper>
    )
}

const mapStateToProps = ({form}) => {
    return {
        form: form.login
    }
};

export default {
    component: connect(mapStateToProps, null)(withRouter(Login))
}

