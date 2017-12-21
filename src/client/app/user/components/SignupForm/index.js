import React from 'react'
import {Field, reduxForm} from 'redux-form'

import RenderField from '../RenderField/index'
import validate from './data/validate'
import fieldInfo from './data/fieldInfo'
import FormContainer from '../../../components/FormContainer/index'

let SignupForm = () => {
    return (
        <FormContainer
            Field={Field}
            RenderField={RenderField}
            fieldInfo={fieldInfo}
            type='signup'/>
    )
}

SignupForm = reduxForm({
    form: 'signup',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(SignupForm);

export default SignupForm