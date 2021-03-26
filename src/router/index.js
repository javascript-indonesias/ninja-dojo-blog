import { createRouter, createWebHashHistory } from 'vue-router';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const HomepageComponent = () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue');
const HomeComponent = () => import(/* webpackChunkName: "about" */ '../views/Home.vue');
const AboutComponent = () => import(/* webpackChunkName: "about" */ '../views/About.vue');

const ReactiveValueComponent = () => import('../views/ReactiveValues.vue');

const ComputedComponent = () => import('../views/ComputedValues.vue');

const PropsComposeComponent = () =>
    import(/* webpackChunkName: "propcompose" */ '../views/PropsComposite.vue');

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomepageComponent,
    },
    {
        path: '/props-compose',
        name: 'PropsComposition',
        component: PropsComposeComponent,
    },
    {
        path: '/computed',
        name: 'ComputedComponents',
        component: ComputedComponent,
    },
    {
        path: '/reactive-value',
        name: 'ReactiveComponents',
        component: ReactiveValueComponent,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        redirect: { name: 'Homepage' },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
