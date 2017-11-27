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
            backgroundColor: '#FAFAFA !important',
            backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/e_colorize:100/v1511820883/45-degree-fabric-light_drgxti.png") !important',
        },
        '#root': {
            minHeight: '100% !important'
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
