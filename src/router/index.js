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

const HomeBlogComponent = () => import('../views/HomeBlog.vue');

const DetailBlogComponent = () =>
    import(/* webpackChunkName: "detailblogs" */ '../views/BlogDetails.vue');

const CreatePostComponent = () => import('../views/CreatePost.vue');

const routes = [
    {
        path: '/',
        name: 'HomeBlog',
        component: HomeBlogComponent,
    },
    {
        path: '/posts/:id',
        name: 'DetailBlog',
        component: DetailBlogComponent,
        props: true,
    },
    {
        path: '/create',
        name: 'CreatePost',
        component: CreatePostComponent,
    },
    {
        path: '/homepages',
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
        redirect: { name: 'HomeBlog' },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
