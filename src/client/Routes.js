import React from 'react';
import App from './App'

import Home from './pages/Home'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Menu from './pages/Menu'
import Testing from './pages/Testing'


//this needs to be inspected 
export default {
    admin: [
        {
            ...App,
            routes:[
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
                },
                {
                    ...Menu,
                    path: '/menu'
                },
                {   ...Testing,
                    path: '/testing'
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
                },
                {
                    ...Menu,
                    path: '/menu'
                },
                {   ...Testing,
                    path: '/testing'
                }
            ]
        }
    ]
};
