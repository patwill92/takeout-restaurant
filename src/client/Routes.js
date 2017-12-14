
import React from 'react';
import App from './App'
import Admin from './AdminApp'

// user App
import Home from './app/user/pages/Home'
import Signup from './app/user/pages/SignUp'
import Login from './app/user/pages/Login'
import Error from './app/user/pages/Error'
import Menu from './app/user/pages/Menu'
import Testing from './app/user/pages/Testing'
import TestMenu from './app/user/pages/Testmenu'

//admin app
import AdminDashboard from './app/admin/pages/Dashboard'
import AdminMenu from './app/admin/pages/Menu'

export default {
    admin: [
        {
            ...Admin,
            routes: [
                {
                    ...AdminDashboard,
                    path: '/',
                    exact: true
                },
                {
                    ...AdminMenu,
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