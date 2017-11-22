import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'

import NavBar from './components/NavBar'
import Container from './components/Container'

const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: 'Roboto !important'
        },
        body: {
            backgroundColor: theme.palette.background + ' !important'
        }
    },
    root: {
        backgroundColor: 'green'
    },
    btnOne: {
        marginTop: '20px !important'
    },
    btnTwo: {
        padding: 50 + '!important'
    }
})

class App extends Component {
    componentDidMount = () => {
        const jssStyles = document.getElementById('server-side-styles');
        jssStyles.parentNode.removeChild(jssStyles);
    };

    render() {
        let {classes, route} = this.props;
        return (
            <div>
                <NavBar/>
                <Container style={{marginTop: 70}}>
                    {renderRoutes(route.routes)}
                </Container>
            </div>
        )
    }
}


export default {
    component: injectSheet(styles)(App)
};
