import React from 'react';
import App from './App'

import Home from './pages/Home'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Error from './pages/Error'
import Menu from './pages/Menu'
import Testing from './pages/Testing'
import TestMenu from './pages/Testmenu'

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
                    ...Menu,
                    path: '/menu'
                },
                {
                    ...TestMenu,
                    path: '/testmenu'
                },
                {
                    ...Testing,
                    path: '/testing'
                },
                {...Error},
            ]
        }
    ]
};
