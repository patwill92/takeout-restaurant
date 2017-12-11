import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import {Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'

import Container from '../../../components/Container/index'


const styles = theme => ({
    root: {
        width: '100% !important'
    },
    column: {
        backgroundColor: '#fff !important',
        boxShadow: theme.shadows[4] + ' !important',
        borderRadius: 5
    }
});

class AddItemForm extends Component {
    render() {
        let {classes, handleSubmit, onBack, height} = this.props;
        console.log(height);
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} style={{height: this.props.height}} mobile={16} tablet={10} computer={8}>
                    <Container>
                       <div>HELLO</div>
                        <button type='submit'>submit</button>
                        <button type='submit' onClick={onBack}>back</button>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}


let AddItem = reduxForm({
    form: 'additem',
    destroyOnUnmount: false
})(withStyles(styles)(AddItemForm));

export default AddItem