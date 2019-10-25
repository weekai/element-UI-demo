import Vue from "vue"
import VueRouter from "vue-router"

import transitionAnimation from "../pages/transitionAnimation/transitionAnimation.vue"
import layout from "../pages/m-layout/layout.vue"
import container from "../pages/container/container.vue"
import icon from "../pages/m-icon/m-icon.vue"
import button from "../pages/button/button.vue"
import radio from "../pages/radio/radio.vue"
import checkbox from "../pages/checkbox/checkbox.vue"
import input from "../pages/input/input.vue"
import inputNumber from "../pages/inputNumber/inputNumber.vue"
import select from "../pages/select/select.vue"
import cascader from "../pages/cascader/cascader.vue"

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
        },
        {
            path: '/button',
            component: button
        },
        {
            path: '/radio',
            component: radio
        },
        {
            path: '/checkbox',
            component: checkbox
        },
        {
            path: '/input',
            component: input
        },
        {
            path: '/inputNumber',
            component: inputNumber
        },
        {
            path: '/select',
            component: select
        },
        {
            path: '/cascader',
            component: cascader
        }
    ],
    // mode: "history"
});

export default router;

