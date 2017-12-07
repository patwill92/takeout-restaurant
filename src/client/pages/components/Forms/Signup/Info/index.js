import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Form, Divider, Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'

import RenderField from '../../RenderField/index'
import validate from './validate'
import fieldInfo from './fieldInfo'
import Container from '../../../../../components/Container'
import Icon from '../../../../../components/Icon'

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
    button: {
        backgroundColor: '#fff !important',
        color: 'rgba(0,0,0,0.8) !important',
        border: '1px solid rgba(0,0,0,0.8) !important'
    },
    social: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 245,
        margin: 'auto',
        '& *': {
            textTransform: 'uppercase !important'
        }
    },
    socialFacebook: {
        backgroundColor: '#fff !important',
        border: '1px solid #3b5998 !important',
        color: '#3b5998 !important',
        '&:hover': {
            backgroundColor: '#3b5998 !important',
            color: '#fff !important',

        }
    },
    socialGoogle: {
        backgroundColor: '#fff !important',
        color: '#d62d20 !important',
        border: '1px solid #d62d20 !important',
        '&:hover': {
            backgroundColor: '#d62d20 !important',
            '& span': {
                color: '#fff !important'
            }

        }
    }
});

class InfoForm extends Component {
    state = {
        google: '#d62d20',
        facebook: '#3b5998'
    };

    render() {
        let {handleSubmit, classes} = this.props;
        let fields = fieldInfo.map(({name, type, label, icon}) => (
            <Field
                name={name}
                type={type}
                label={label}
                component={RenderField}
                key={name}
                icon={icon}
            />
        ));
        let google = '#d62d20';
        let facebook = '#3b5998';
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} mobile={16} tablet={10} computer={8}>
                    <Container>
                        <Form className={classes.form} onSubmit={handleSubmit}>
                            {fields}
                            <Button className={classes.button} fluid type='submit'>DONE!</Button>
                        </Form>
                        <Divider horizontal>Or</Divider>
                        <Button onMouseOut={() => this.setState({facebook})} onMouseOver={() => this.setState({facebook: '#fff'})}
                            className={classes.socialFacebook} style={{marginBottom: 10}} fluid type='submit'>
                            <div className={classes.social}>
                                <div style={{flex: 0, marginLeft: 15}}>
                                    <Icon name='facebookF' color={this.state.facebook}/>
                                </div>
                                <div style={{flex: 1}}>
                                    <span>Sign up with facebook</span>
                                </div>
                            </div>
                        </Button>
                        <Button onMouseOut={() => this.setState({google})} onMouseOver={() => this.setState({google: '#fff'})}
                                className={classes.socialGoogle} fluid type='submit'>
                            <div className={classes.social}>
                                <div style={{flex: 0, marginLeft: 15}}>
                                    <Icon name='google' color={this.state.google}/>
                                </div>
                                <div style={{flex: 1}}>
                                    <span>Sign up with google</span>
                                </div>
                            </div>
                        </Button>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}

let SignupInfoForm = reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(InfoForm));

export default SignupInfoForm