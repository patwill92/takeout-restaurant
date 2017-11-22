import React, {Component} from 'react'
import injectSheet from 'react-jss'

import NavBar from './components/NavBar'

const styles = {
    '@global': {
        '*': {
            fontFamily: 'Roboto !important'
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
}

class App extends Component {
    componentDidMount = () => {
        const jssStyles = document.getElementById('server-side-styles');
        jssStyles.parentNode.removeChild(jssStyles);
    };

    render() {
        let {classes} = this.props;
        return (
            <NavBar/>
        )
    }
}


export default {
    component: injectSheet(styles)(App)
};
