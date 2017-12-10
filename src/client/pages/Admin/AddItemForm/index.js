import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Form, Divider, Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'

import RenderField from './formFields'
import {fieldData} from './fieldData'
import Container from '../../../components/Container'
import Icon from '../../../components/Icon'
import ImageField from './ImageField'

const styles = theme => ({
    root: {
        width: '100% !important'
    },
    column: {
        backgroundColor: '#fff !important',
    },
    form: {
        margin: 0 + '!important',
        maxHeight: 'inherit !important'
    },
    email: {
        backgroundColor: '#fff !important',
        color: 'rgba(0,0,0,0.8) !important',
        border: '1px solid rgba(0,0,0,0.8) !important',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.8) !important',
            color: '#fff !important',
        }
    },
    social: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 245,
        fontWeight: 400 + ' !important',
        margin: 'auto',
        '& *': {
            textTransform: 'uppercase !important'
        }
    },
    facebook: {
        backgroundColor: '#fff !important',
        border: '1px solid #3b5998 !important',
        '& a': {
            color: '#3b5998 !important',
            textDecoration: 'none'
        },
        '&:hover': {
            backgroundColor: '#3b5998 !important',
            '& a': {
                color: '#fff !important',
                textDecoration: 'none'
            }
        }
    },
    google: {
        backgroundColor: '#fff !important',
        '& a': {
            color: '#d62d20 !important',
            textDecoration: 'none'
        },
        border: '1px solid #d62d20 !important',
        '&:hover': {
            backgroundColor: '#d62d20 !important',
            '& a': {
                color: '#fff !important',
                textDecoration: 'none'
            }
        }
    },
    file: {
        border: `1px solid ${theme.palette.primary}`,
        borderRadius: 5,
        display: 'inline-block',
        padding: '6px 12px',
        cursor: 'pointer'
    }
});

class AddItemForm extends Component {
    state = {
        blob: '',
        name: ''
    };
    onImgChange = (e) => {
        let file = e.target.files[0];
        console.log(file);
        this.setState({name: file.name});
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.setState({blob: reader.result})
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    render() {
        let {handleSubmit, classes} = this.props;
        console.log(this.state.name);
        let fields = fieldData.map((field, i) => (
            <Field
                name={field.name}
                type={field.type}
                label={field.label}
                component={RenderField}
                value={field.value}
                key={field.value ? field.value : field.name}
                icon={field.icon}
                textArea={field.textArea ? field.textArea : false}
                radio={field.radio ? field.radio : false}
            />
        ));
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} mobile={16} tablet={10} computer={8}>
                    <Container>
                        <Form className={classes.form} >
                            <Field name="avatar"
                            label={this.state.blob}
                            form={this.state.name}
                            onChange={this.onImgChange}
                            component={ImageField}
                            classes={classes}
                            />
                            {fields}
                        </Form>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}



let AddItem = reduxForm({
    form: 'additem',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
})(withStyles(styles)(AddItemForm));

export default AddItem