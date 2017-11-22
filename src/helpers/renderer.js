import React from 'react';
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {JssProvider, SheetsRegistry, ThemeProvider} from 'react-jss'

import Routes from '../client/Routes'
import css from '../styles/semantic.min.css';
import theme from '../styles/theme'

export default (req, context) => {
  const sheets = new SheetsRegistry();

  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <JssProvider registry={sheets}>
        <ThemeProvider theme={theme}>
            {renderRoutes(Routes)}
        </ThemeProvider>
      </JssProvider>
    </StaticRouter>
  );


  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style type="text/css">
          ${css}
        </style>
        <style type="text/css" id="server-side-styles">
          ${sheets.toString()}
        </style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
