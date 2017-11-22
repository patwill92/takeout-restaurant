import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {ThemeProvider} from 'react-jss'

import Routes from './Routes'
import theme from '../styles/theme'

ReactDOM.hydrate(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            {renderRoutes(Routes)}
        </ThemeProvider>
    </BrowserRouter>,
  document.querySelector('#root')
);
