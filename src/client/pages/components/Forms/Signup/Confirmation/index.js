import React from 'react'
import {reduxForm} from 'redux-form'
import {Button} from 'semantic-ui-react'
import withStyles from 'react-jss'

const styles = theme => ({
    root: {

    }
});

const Confirmation = ({handleSubmit, classes, previousPage}) => {

    return (
        (
            <div className={classes.root} >

                <Button onClick={handleSubmit} type='submit'>ENTER</Button>
                <Button onClick={previousPage} type='submit'>Back</Button>
            </div>
        )
    )
};

let ConfirmationPage = reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(withStyles(styles)(Confirmation));

export default ConfirmationPage;