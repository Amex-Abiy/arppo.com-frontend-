import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/BUSINESS/dashboard'
//Accounts
import AccountsParent from '../views/BUSINESS/Accounts/accountsParent'
import Accounts from '../views/BUSINESS/Accounts/accounts'
import Blacklisted from '../views/BUSINESS/Accounts/blacklisted'
import Profile from '../views/BUSINESS/Accounts/profile'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/accounts',
        name: 'AccountsParent',
        component: AccountsParent,
        children: [{
                path: '/',
                name: 'Accounts',
                component: Accounts,
            },
            {
                path: 'blacklisted',
                name: 'Blacklisted',
                component: Blacklisted
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Profile
            },
            // {
            //     path: 'accounts',
            //     component: Account
            // }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router