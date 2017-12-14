import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Grid} from 'semantic-ui-react'

import LoginForm from '../../components/LoginForm'
import Container from '../../components/Container'

const styles = theme => ({
    root: {
        width: '100% !important',
        margin: 0 + ' !important'
    },
    column: {
        backgroundColor: '#fff !important',
        boxShadow: theme.shadows[4] + ' !important',
        borderRadius: 5
    }
});

class Login extends Component {
    render() {
        let {classes} = this.props;
        return (
            <Grid className={classes.root} centered>
                <Grid.Column className={classes.column} mobile={16} tablet={10} computer={8}>
                    <Container>
                        <LoginForm/>
                    </Container>
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

