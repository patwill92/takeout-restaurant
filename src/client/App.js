import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
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
        display: 'grid',
        gridAutoColumns: '100vw',
        gridTemplateRows: 'auto 1fr auto'
    }
});

class App extends Component {
    componentDidMount = () => {
        const jssStyles = document.getElementById('server-side-styles');
        jssStyles.parentNode.removeChild(jssStyles);
    };

    render() {
        let {classes, route, user} = this.props;
        return (
            <div className={classes.root} style={{minHeight: 'inherit'}}>
                { user ? !user.admin && <NavBar/> : <NavBar/>}
                <Container style={{display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                    {renderRoutes(route.routes)}
                </Container>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
}

export default {
    component: connect(mapStateToProps)(injectSheet(styles)(App))
};
