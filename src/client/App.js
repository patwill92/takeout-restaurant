import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'

import NavBar from './app/user/components/NavBar'
import Footer from './app/user/components/Footer'
import Container from './app/components/Container'
import {fetchMenu,fetchCart,getUser} from "./actions";

const styles = theme => ({
    '@global': {
        '*': {
            fontFamily: 'Roboto !important'
        },
        '.sidebar::-webkit-scrollbar': {
            '-webkit-appearance': 'none !important',
            display: 'none !important'
        },
        '#root': {
            minHeight: '100% !important'
        }
    },
    root: {
        display: 'grid',
        gridAutoColumns: '100vw',
        gridTemplateRows: 'auto minmax(70vh, 1fr) auto'
    }
});

class App extends Component {
    componentDidMount = () => {
        const jssStyles = document.getElementById('server-side-styles');
        jssStyles.parentNode.removeChild(jssStyles);
        this.props.fetchMenu();
        this.props.fetchCart();
        this.props.getUser();
    };

    renderUserApp = (route, classes) => {
        return (
            <div className={classes.root} style={{minHeight: 'inherit'}}>
                <NavBar/>
                <Container
                    style={{display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                    {renderRoutes(route.routes)}
                </Container>
                <Footer/>
            </div>
        )
    };

    render() {
        let {classes, route} = this.props;
        return this.renderUserApp(route, classes)
    }
}

const mapStateToProps = ({user}) => {
    return {
        user
    }
};

export default {
    component: connect(mapStateToProps, {fetchMenu,fetchCart,getUser})(injectSheet(styles)(App))
};
