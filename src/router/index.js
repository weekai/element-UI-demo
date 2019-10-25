import Vue from "vue"
import VueRouter from "vue-router"

import transitionAnimation from "../pages/transitionAnimation/transitionAnimation.vue"
import layout from "../pages/m-layout/layout.vue"
import container from "../pages/container/container.vue"
import icon from "../pages/m-icon/m-icon.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            redirect: "/transitionAnimation"
        },
        {
            path: '/transitionAnimation',
            component: transitionAnimation
        },
        {
            path: '/layout',
            component: layout
        },
        {
            path: '/container',
            component: container
        },
        {
            path: '/icon',
            component: icon
        }
    ],
    // mode: "history"
});

export default router;

