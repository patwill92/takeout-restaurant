import React from 'react'
import {Field, reduxForm} from 'redux-form'

import RenderField from '../RenderField/index'
import validate from './data/validate'
import fieldInfo from './data/fieldInfo'
import FormContainer from '../../../components/FormContainer/index'

let LoginForm = () => {
    return (
        <FormContainer
            Field={Field}
            RenderField={RenderField}
            fieldInfo={fieldInfo}
            type='login'/>
    )
};

LoginForm = reduxForm({
    form: 'login',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(LoginForm);

export default LoginForm;