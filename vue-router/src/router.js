import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
    return import ( /* webpackChunkName: "about" */ './views/About.vue')
}

const Users = () => {
    return import ( /* webpackChunkName: "Users" */ './views/Users.vue')
}
const UsersEdit = () => {
    return import ( /* webpackChunkName: "UsersEdit" */ './views/UsersEdit.vue')
}
const UsersDetail = () => {
    return import ( /* webpackChunkName: "UsersDetail" */ './views/UsersDetail.vue')
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/users',
            name: 'users',
            beforeEnter: (to, from, next) => {
                console.log("beforeEnter")
                next()
            },
            component: Users,
            children: [{
                    path: ':id',
                    name: 'users-detail',
                    component: UsersDetail,
                },
                {
                    path: ':id/edit',
                    name: 'users-edit',
                    component: UsersEdit,
                }
            ]
        },
        {
            path: '/redirect-me',
            redirect: { name: 'users' }
        },
        {
            path: '/*',
            redirect: { name: 'home' }
        }
    ]
})