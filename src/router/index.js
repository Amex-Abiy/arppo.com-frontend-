import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/BUSINESS/dashboard'
import Login from '../views/BUSINESS/login'
//BUSINESS
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
import Closed from '../views/BUSINESS/JobPostings/closed'
import CreateJobPosting from '../views/BUSINESS/JobPostings/createNew'
import Archived from '../views/BUSINESS/JobPostings/archived'
import Details from '../views/BUSINESS/JobPostings/details'
import Edit from '../views/BUSINESS/JobPostings/edit'
//Messages
import MessagesParent from '../views/BUSINESS/Messages/messagesParent'
import MessagesThreads from '../views/BUSINESS/Messages/threads'
import MessagesAnnouncements from '../views/BUSINESS/Messages/announcements'
import AnnouncementDetail from '../views/BUSINESS/Messages/announcementDetail'
//Applications
import ApplicationsParent from '../views/BUSINESS/Applications/applicationsParent'
import ViewByPostings from '../views/BUSINESS/Applications/viewByPostings'
import ViewApplications from '../views/BUSINESS/Applications/viewApplications'
import ViewAppDetails from '../views/BUSINESS/Applications/viewAppDetails'

//SYSTEM ADMIN
import SystemAdminLogin from '../views/ADMIN_SYS/login'
import SystemAdminBusinessesParent from '../views/ADMIN_SYS/Businesses/businessesParent'
import RegisterBusiness from '../views/ADMIN_SYS/Businesses/registerBusiness'
import RegisterBusinessAdmin from '../views/ADMIN_SYS/Businesses/registerBusinessAdmin'
import GenericSearchPage from '../views/ADMIN_SYS/genericSearchPage'
import SystemManagementParent from '../views/ADMIN_SYS/Management/systemManagementParent'
import CreateSystemSubAdmin from '../views/ADMIN_SYS/Management/createSystemSubAdmin'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
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
        ]
    },
    {
        path: '/applications',
        name: 'Applications',
        component: ApplicationsParent,
        children: [{
                path: '/',
                name: 'viewByPostings',
                component: ViewByPostings
            },
            {
                path: 'viewApplications',
                name: 'ViewApplications',
                component: ViewApplications
            },
            {
                path: 'viewDetails',
                name: 'ViewAppDetails',
                component: ViewAppDetails
            }
        ]
    },
    {
        path: '/messages',
        name: 'Messages',
        component: MessagesParent,
        children: [{
                path: 'announcements',
                name: 'Announcements',
                component: MessagesAnnouncements
            },
            {
                path: 'threads',
                name: 'Threads',
                component: MessagesThreads
            },
            {
                path: 'announcements/:announcementId',
                name: 'AnnouncementDetail',
                component: AnnouncementDetail
            }
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
                path: 'closed',
                name: 'Closed',
                component: Closed
            },
            {
                path: 'archived',
                name: 'Archived',
                component: Archived
            },
            {
                path: 'details/:id',
                name: 'Details',
                component: Details
            },
            {
                path: 'edit/:id',
                name: 'Edit',
                component: Edit
            }
        ]
    },

    // SYSTEM ADMIN ROUTES

    {
        path: '/sysAdmin/login',
        name: 'SysAdLogin',
        component: SystemAdminLogin
    },
    {
        path: '/sysAdmin/businesses',
        name: 'SysAdBusinesses',
        component: SystemAdminBusinessesParent,
        children: [{
                path: 'registerBusiness',
                name: 'RegisterBusiness',
                component: RegisterBusiness
            },
            {
                path: 'registerBusinessAdmin/:businessId',
                name: 'RegisterBusinessAdmin',
                component: RegisterBusinessAdmin
            },
            /*The generic search page applies to all paths that perform an action on a certain business, and so the search 
               page has a param ':forPath' to determine to which page it should proceed after search result. Then the 
               required path page is displayed*/
            {
                path: 'genericSearch/:forPath',
                name: 'GenericSearchPage',
                component: GenericSearchPage
            }
        ]
    },
    {
        path: '/sysAdmin/management',
        name: 'SysAdLogin',
        component: SystemManagementParent,
        children: [{
            path: 'createSystemSubAdmin',
            name: 'CreateSystemSubAdmin',
            component: CreateSystemSubAdmin
        }]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router