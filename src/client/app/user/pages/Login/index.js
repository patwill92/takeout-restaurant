import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Grid} from 'semantic-ui-react'

import LoginForm from '../../components/LoginForm'
import Container from '../../../components/Container'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#f7f7f7',
        }
    },
    root: {
        width: '100% !important',
        margin: 0 + ' !important'
    },
    column: {
        backgroundColor: 'rgba(0,0,0,0) !important',
        boxShadow: theme.shadows[0] + ' !important',
        borderRadius: 5,
        padding: 0 + ' !important',
        display: 'flex !important'
    },
    message: {
        '& *': {
            fontWeight: 400,
            margin: 0
        },
        marginBottom: 25
    },
    registerMessage: {
        backgroundImage: 'url("http://www.seriouseats.com/images/2014/09/20140929-salmon-burger-yasmin-recipe-7.jpg") !important',
        backgroundRepeat: 'no-repeat !important',
        backgroundPosition: 'center!important',
        backgroundSize: 'cover !important',
        display: 'flex',
        alignItems: 'stretch',
        width: 300,
        minWidth: '33%',
        '& h1': {
            fontWeight: 400,
            margin: 0
        }
    },
    imgOverlay: {
        minHeight: '100%',
        padding: '40px 10px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        '& *': {
            color: '#fff',
            fontWeight: 400,
        },
    },
    link: {
        textDecoration: 'none',
        padding: '4px 12px',
        border: '1.5px solid #fff',
        borderRadius: 5,
        '&:hover': {
            color: '#fff'
        },
        order: 2,
    },
    '@media (min-width: 768px)': {
        column: {
            '& div:first-child': {
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5
            }
        },
        registerMessage: {
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
        },
        imgOverlay: {
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
        }
    },

    '@media (max-width: 767px)': {
        '@global': {
            body: {
                '& #containerID': {
                    paddingLeft: 0 + ' !important',
                    paddingRight: 0 + ' !important',

                },
                backgroundColor: '#fff',
                '& #navbar': {
                    marginBottom: 0 + ' !important'
                }
            }
        },
        column: {
            flexDirection: 'column',
            boxShadow: theme.shadows[0] + ' !important',
            '& #containerID': {
                order: 2,
                padding: '30px 10px !important',
                paddingTop: '15px !important'
            }
        },
        registerMessage: {
            minWidth: '100%',
            order: 1,
        },
        imgOverlay: {
            padding: '40px 10px',
            '& a': {
                marginTop: 10
            },
            '& h1': {
                marginBottom: 5 + ' !important'
            }
        }
    }
});

class Login extends Component {
    render() {
        let {classes} = this.props;
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} mobile={16} tablet={15} computer={12}>
                    <Container style={{padding: '40px 35px', backgroundColor: '#fff'}}>
                        <div className={classes.message}>
                            <h1>Welcome back!</h1>
                            <h1 style={{fontWeight: 300}}>Let's get you logged in.</h1>
                        </div>
                        <LoginForm/>
                    </Container>
                    <div className={classes.registerMessage}>
                        <div className={classes.imgOverlay}>
                            <div>
                                <h1 style={{textAlign: 'center', letterSpacing: '1px', marginBottom: 10}}>New here?</h1>
                                <p style={{textAlign: 'center', fontWeight: 300, maxWidth: '80%', margin: 'auto'}}>
                                    What are you waiting for? Sign up with us and see what the fuss is all about!</p>
                            </div>
                            <Link to='/signup' className={classes.link}>Sign up</Link>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form: form.login
    }
};

export default {
    component: connect(mapStateToProps, null)(withRouter(withStyles(styles)(Login)))
}

