import React from 'react';
import App from './App'

import Home from './pages/Home'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Admin from './pages/Admin'

export default {
    admin: [
        {
            ...App,
            routes: [
                {
                    ...Admin,
                    path: '/',
                    exact: true
                },
                {
                    ...Home,
                    path: '/menu'
                }
            ]
        }
    ],
    user: [
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
                },
                {
                    ...Admin,
                    path: '/admin'
                }
            ]
        }
    ]
};
