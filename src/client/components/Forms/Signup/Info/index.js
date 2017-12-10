import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Form, Divider, Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'

import RenderField from '../../RenderField/index'
import validate from './data/validate'
import fieldInfo from './data/fieldInfo'
import Container from '../../../Container/index'
import Icon from '../../../Icon/index'

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
    }
});

class InfoForm extends Component {
    state = {
        google: '#d62d20',
        facebook: '#3b5998',
        email: 'rgba(0,0,0,0.8)'
    };

    render() {
        let {handleSubmit, classes} = this.props;
        let fields = fieldInfo.inputs.map(({name, type, label, icon}) => (
            <Field
                name={name}
                type={type}
                label={label}
                component={RenderField}
                key={name}
                icon={icon}
            />
        ));
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} mobile={16} tablet={10} computer={8}>
                    <Container>
                        <Form className={classes.form} action='/user/signup' method='post'>
                            {fields}
                            {fieldInfo.buttons.map(({name, icon, color}, i) => {
                                let divider = i < 1 && <Divider key='divider' horizontal>Or</Divider>;
                                return (
                                    [
                                        <Button onMouseOut={() => this.setState({[name]: color})}
                                                onMouseOver={() => this.setState({[name]: '#fff'})}
                                                key={name + i}
                                                className={classes[name]} style={{marginBottom: i === 1 ? 10 : 0}} fluid
                                                type={i < 1 ? 'submit' : 'button'}>
                                            <div className={classes.social}>
                                                <div style={{flex: 0, marginLeft: 15}}>
                                                    <Icon style={{bottom: 1}} name={icon} color={this.state[name]}/>
                                                </div>
                                                <div style={{flex: 1}}>
                                                    {i === 0 && <span>Sign up with {name}</span>}
                                                    {i > 0 && <a href={`/auth/${name}`}><span>Continue with {name}</span></a>}
                                                </div>
                                            </div>
                                        </Button>,
                                        divider
                                    ]
                                )
                            })}
                        </Form>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}

let SignupInfoForm = reduxForm({
    form: 'signup',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(InfoForm));

export default SignupInfoForm