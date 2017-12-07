import React from 'react';
import App from './App'

import Home from './pages/Home'
import Signup from './pages/SignUp'

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...Signup,
                path: '/signup'
            }
        ]
    }
];
