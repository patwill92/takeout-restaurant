import React from 'react'
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import withStyle from 'react-jss'

import Icon from '../../../components/Icon'

const styles = theme => ({
    gridCol: {
        maxWidth: 450,
        boxSizing: 'border-box !important'
    },
    segment: {
        '&:after': {
            display: 'none'
        }
    },
    btn: {
        backgroundColor: theme.palette.primary + ' !important',
        color: '#ffffff !important',
        '&:hover': {
            color: '#ffffff !important',
            backgroundColor: theme.palette.hoverPrimary + ' !important',
        },
        '&:active': {
            boxShadow: theme.shadows[1] + ' !important'
        },
        boxShadow: theme.shadows[3] + ' !important'
    }
})

const LoginForm = ({classes, admin}) => (
    <Grid.Column className={classes.gridCol}>
        <Header as='h2' color='teal' textAlign='center'>
            Welcome Admin
        </Header>
        <Form size='large'>
            <Segment stacked className={classes.segment}>
                <Form.Input
                    style={{minWidth: '100%'}}
                    fluid
                    icon={
                        <Icon
                            color='gray'
                            style={{position: 'absolute', left: 12}}
                            name='userAlt'/>
                    }
                    iconPosition='left'
                    placeholder='E-mail address'
                />
                <Form.Input
                    fluid
                    icon={
                        <Icon
                            color='gray'
                            style={{position: 'absolute', left: 12}}
                            name='lockAlt'/>
                    }
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />

                <Button className={classes.btn} fluid size='large'>Login</Button>
            </Segment>
        </Form>
        {!admin && <Message>
            New to us? <a href='#'>Sign Up</a>
        </Message>}
    </Grid.Column>
);

export default withStyle(styles)(LoginForm)

