import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {ThemeProvider} from 'react-jss'

import {client as createClientStore} from '../helpers/store'
import Routes from './Routes'
import theme from '../styles/theme'

// const init = document.getElementById('initialState');
// const initState = {...window.INITIAL_STATE};
const store = createClientStore(window.INITIAL_STATE);
const {user} = store.getState();
const routes = user ? !user.admin ? Routes.user : Routes.admin : Routes.user;

// init.remove();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {renderRoutes(routes)}
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'),
    () => {
        if (window.location.hash && window.location.hash == '#_=_') {
            if (window.history && history.pushState) {
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                let scroll = {
                    top: document.body.scrollTop,
                    left: document.body.scrollLeft
                };
                window.location.hash = '';
                document.body.scrollTop = scroll.top;
                document.body.scrollLeft = scroll.left;
            }
        }
    }
);
