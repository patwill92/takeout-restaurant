process.env.NODE_ENV = 'production';
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {ThemeProvider} from 'react-jss'

import {client as createClientStore} from '../helpers/store'
import Routes from './Routes'
import theme from '../styles/theme'

const store = createClientStore(window.INITIAL_STATE);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {renderRoutes(Routes)}
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
