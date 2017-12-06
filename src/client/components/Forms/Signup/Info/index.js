import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'semantic-ui-react'
import withStyles from 'react-jss'

import RenderField from '../../RenderField'
import validate from './validate'
import fieldInfo from './fieldInfo'

const styles = theme => ({
    root: {

    }
});

const InfoForm = ({handleSubmit}) => {
    let fields = fieldInfo.map(({name, type, label}) => (
        <Field
            name={name}
            type={type}
            label={label}
            component={RenderField}
            key={name}
        />
    ));

    return (
        (
            <form onSubmit={handleSubmit}>
                {fields}
                <Button type='submit' >NEXT</Button>
            </form>
        )
    )
};

let SignupInfoForm = reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(InfoForm));

export default SignupInfoForm