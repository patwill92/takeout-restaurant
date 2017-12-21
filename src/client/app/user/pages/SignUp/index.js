import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"

import SignupForm from '../../components/SignupForm'
import FormWrapper from '../../components/FormWrapper'

const Login = props => {
    return (
        <FormWrapper
            image={'http://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/2012-cocktails-xl-umami-burgers-with-port-and-stilton.jpg?itok=iiKxK4bs'}
            heading={'Welcome to Forkit!'}
            subHeading={"The best forking burgers, period."}
            sideHeading={'One of us?'}
            sideSubHeading={'No need to sign up! Just log right in.'}
            formType={'login'}
        >
            <SignupForm/>
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

