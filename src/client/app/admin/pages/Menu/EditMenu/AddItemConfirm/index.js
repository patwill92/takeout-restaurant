import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import {reduxForm, destroy} from 'redux-form'
import {Grid, List, Button} from 'semantic-ui-react'
import withStyles from 'react-jss'

import PageContainer from '../../../../components/PageContainer'
import Icon from '../../../../../components/Icon/index'


const styles = theme => ({
    root: {
        width: '100% !important',
        margin: 0 + ' !important'
    },
    column: {
        backgroundColor: '#fff !important',
        boxShadow: 'none !important',
        border: 'none !important',
        margin: '0 auto !important',
        minHeight: 529.5 + ' !important',
        maxWidth: 500 + ' !important',
        display: 'flex !important',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    list: {
        display: 'flex !important',
        flexDirection: 'column !important',
        justifyContent: 'space-between !important'
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
        values = values.image ? {image: this.props.blob, ...values}: values;
        return Object.entries(values).map(([key, value]) => {
            return (
                <List.Item key={key}>
                    <List.Content>
                        <p style={{textTransform: 'uppercase', fontWeight: 500, marginBottom: 5}}>{key}</p>
                    </List.Content>
                    <List.Content>
                        {key !== 'image' ?
                            <p style={{textTransform: 'capitalize', fontSize: '1.0rem', color: '#333'}}>
                                {key === 'available' ? value === '0' ? 'No' : 'Yes' : value}
                            </p> :
                            <img style={{width: 'auto', maxHeight: '180px'}} src={this.props.blob}/>}
                    </List.Content>
                </List.Item>
            )
        });
    };

    render() {
        let {classes, onSubmit, onBack, height, formContent, blob} = this.props;
        return (
            <PageContainer>
                {'Confirm'}
                <Grid.Column className={classes.column}  mobile={16} tablet={14} computer={10}>
                    <List divided verticalAlign='middle' style={{height: height}} className={classes.list}>
                        {this.renderConfirmationFields(formContent)}
                        <div className={classes.buttons}>
                            <Button
                                style={{backgroundColor: '#EF5350'}}
                                onClick={onBack}
                                className={classes.btn}>
                                <Icon color='#fff' style={{marginRight: 5, fontSize: '0.9rem', bottom: 1}}
                                      name='chevronLeft'/>
                                Back
                            </Button>
                            <Button
                                style={{backgroundColor: '#8BC34A'}}
                                onClick={() => {
                                    onSubmit();
                                    this.props.dispatch(destroy('addItem'));
                                    this.props.history.push('/menu')
                                }}
                                className={classes.btn}>Add Item
                                <Icon color='#fff' style={{marginLeft: 5, fontSize: '0.9rem', bottom: 1}}
                                      name='paperPlane'/>
                            </Button>
                        </div>
                    </List>
                </Grid.Column>
            </PageContainer>
        )
    }
};


let AddItem = reduxForm({
    form: 'addItem',
    destroyOnUnmount: false
})(withRouter(withStyles(styles)(AddItemForm)));

export default AddItem