import {createRouter, createWebHistory} from "vue-router";
import Home from "./shared/presentation/views/home.vue";
import showroomRoutes from "./showroom/presentation/showroom-routes.js";

// Lazy-loaded shared component for unsupported navigation routes.
const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

// Application routes: semantic routes with child routes per bounded context.
const routes = [
    { path: '/home', name: 'home', component: Home, meta: { title: 'Home' } },
    { path: '/vehicles', name: 'collection', children: showroomRoutes },
    { path: '/', redirect: '/home' },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: pageNotFound, meta: { title: 'Page Not Found' } }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

/**
 * Global navigation guard that updates the document title before each navigation.
 *
 * @param {import('vue-router').RouteLocationNormalized} to - Target route.
 * @param {import('vue-router').RouteLocationNormalized} from - Previous route.
 * @returns {boolean} Always true, allowing navigation to proceed.
 */
router.beforeEach((to, from) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    const baseTitle = 'Astara Showroom Management';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    return true;
});

export default router;
