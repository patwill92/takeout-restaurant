import React from 'react';
import App from './App'

import Home from './pages/Home'
import Signup from './pages/SignUp'
import Login from './pages/Login'

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
            },
            {
                ...Login,
                path: '/login'
            }
        ]
    }
];
