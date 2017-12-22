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
import Cart from './app/user/pages/Cart'

//admin app
import AdminDashboard from './app/admin/pages/Dashboard'
import AdminMenu from './app/admin/pages/Menu'
import AdminActivity from './app/admin/pages/Activity'
import AdminUsers from './app/admin/pages/Users'
import AdminSettings from './app/admin/pages/Settings'

import AddItem from './app/admin/pages/Menu/AddItem'
import MenuOverview from './app/admin/pages/Menu/Overview'
import EditItem from './app/admin/pages/Menu/EditItem'

import AdminActivityMain from './app/admin/pages/Activity/Main'


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
                    ...AdminActivity,
                    path: '/activity',
                    routes: [
                        {
                            ...AdminActivityMain,
                            path: '/activity',
                            exact: true
                        }
                    ]
                },
                {
                    ...AdminMenu,
                    path: '/menu',
                    routes: [
                        {
                            ...MenuOverview,
                            path: '/menu',
                            exact: true
                        },
                        {
                            ...AddItem,
                            path: '/menu/additem'
                        },
                        {
                            ...EditItem,
                            path: '/menu/edititem'
                        }
                    ]
                },
                {
                    ...AdminUsers,
                    path: '/users'
                },
                {
                    ...AdminSettings,
                    path: '/settings'
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
                {
                    ...Cart,
                    path: '/cart'
                },
                {...Error},
            ]
        }
    ]
};