import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/BUSINESS/dashboard'
//Accounts
import AccountsParent from '../views/BUSINESS/Accounts/accountsParent'
import Accounts from '../views/BUSINESS/Accounts/accounts'
import Blacklisted from '../views/BUSINESS/Accounts/blacklisted'
import Profile from '../views/BUSINESS/Accounts/profile'
import RegisterAdmin from '../views/BUSINESS/Accounts/registerAdmin'
import SetLoginHrs from '../views/BUSINESS/Accounts/setLoginHrs'
//JobPostings
import JobPostingsParents from '../views/BUSINESS/JobPostings/jobPostingsParent'
import Active from '../views/BUSINESS/JobPostings/active'
import Recents from '../views/BUSINESS/JobPostings/recents'
import CreateJobPosting from '../views/BUSINESS/JobPostings/createNew'
import Archived from '../views/BUSINESS/JobPostings/archived'

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
            {
                path: 'registerAdmin',
                name: 'RegisterAdmin',
                component: RegisterAdmin
            },
            {
                path: 'setLoginHrs',
                name: 'SetLoginHrs',
                component: SetLoginHrs
            },
            // {
            //     path: 'accounts',
            //     component: Account
            // }
        ]
    },
    {
        path: '/jobPostings',
        name: 'JobPostingsParents',
        component: JobPostingsParents,
        children: [{
                path: '/',
                name: 'JobPostings-Active',
                component: Active
            },
            {
                path: 'recents',
                name: 'Recents',
                component: Recents
            },
            {
                path: 'createJobPosting',
                name: 'CreateJobPosting',
                component: CreateJobPosting
            },
            {
                path: 'archived',
                name: 'Archived',
                component: Archived
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router