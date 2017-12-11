import React, {Component, Fragment} from 'react'
import {reduxForm} from 'redux-form'
import {Grid, List, Button} from 'semantic-ui-react'
import withStyles from 'react-jss'

import Container from '../../../components/Container'
import Icon from '../../../components/Icon'


const styles = theme => ({
    root: {
        width: '100% !important',
        margin: 0 + ' !important'
    },
    column: {
        backgroundColor: '#fff !important',
        boxShadow: theme.shadows[4] + ' !important',
        borderRadius: 5
    },
    list: {
        display: 'flex !important',
        flexDirection: 'column !important',
        justifyContent: 'space-between !important',
        height: '100% !important'
    },
    btn: {
        float: 'right',
        fontWeight: 400 + ' !important',
        textTransform: 'uppercase !important',
        color: '#fff !important',
        boxShadow: theme.shadows[1] + ' !important',
        '&:hover': {
            boxShadow: theme.shadows[3] + ' !important'
        }
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

class AddItemForm extends Component {
    renderConfirmationFields = (form) => {
        let {values} = form;
        return Object.entries(values).map(([key, value]) => {
            return (
                <List.Item key={key}>
                    <List.Content>
                        <p style={{textTransform: 'uppercase', fontWeight: 500, marginBottom: 5}}>{key}</p>
                    </List.Content>
                    <List.Content>
                        {typeof value === 'string' ?
                            <p style={{textTransform: 'capitalize', fontSize: '1.0rem', color: '#333'}}>{value}</p> :
                            <img style={{width: 'auto', maxHeight: '180px'}} src={this.props.blob}/>}
                    </List.Content>
                </List.Item>
            )
        });
    };

    render() {
        let {classes, handleSubmit, onBack, height, formContent, blob} = this.props;
        console.log(this.renderConfirmationFields(formContent));
        ;
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} style={{height}} mobile={16} tablet={10} computer={8}>
                    <Container>
                        <List divided verticalAlign='middle' className={classes.list}>
                            {this.renderConfirmationFields(formContent)}
                            <div className={classes.buttons}>
                                <Button
                                    style={{backgroundColor: '#FFC107'}}
                                    onClick={onBack}
                                    className={classes.btn}>
                                    <Icon color='#fff' style={{marginRight: 5, fontSize: '0.9rem', bottom: 1}}
                                          name='chevronLeft'/>
                                    Back
                                </Button>
                                <Button
                                    style={{backgroundColor: '#388E3C'}}
                                    onClick={handleSubmit}
                                    className={classes.btn}>Add Item
                                    <Icon color='#fff' style={{marginLeft: 5, fontSize: '0.9rem', bottom: 1}}
                                          name='paperPlane'/>
                                </Button>
                            </div>
                        </List>
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