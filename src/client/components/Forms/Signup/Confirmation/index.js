import React from 'react'
import {reduxForm} from 'redux-form'
import {Button} from 'semantic-ui-react'
import withStyles from 'react-jss'

const styles = theme => ({
    root: {

    }
});

const Confirmation = ({handleSubmit, classes}) => {

    return (
        (
            <div className={classes.root} onSubmit={handleSubmit}>

                <Button type='submit' >ENTER</Button>
            </div>
        )
    )
};

let ConfirmationPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(withStyles(styles)(Confirmation));

export default ConfirmationPage;