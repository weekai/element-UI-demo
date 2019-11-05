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
import switchs from "../pages/switch/switch.vue"
import slider from "../pages/slider/slider.vue"
import timePicker from "../pages/timePicker/timePicker.vue"
import datePicker from "../pages/datePicker/datePicker.vue"
import dateTimePicker from "../pages/dateTimePicker/dateTimePicker.vue"
import upload from "../pages/upload/upload.vue"
import rate from "../pages/rate/rate.vue"
import colorPicker from "../pages/colorPicker/colorPicker.vue"
import transfer from "../pages/transfer/transfer.vue"
import form from "../pages/form/form.vue"

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
        },
        {
            path: '/switch',
            component: switchs
        },
        {
            path: '/slider',
            component: slider
        },
        {
            path: '/timePicker',
            component: timePicker
        },
        {
            path: '/datePicker',
            component: datePicker
        },
        {
            path: '/dateTimePicker',
            component: dateTimePicker
        },
        {
            path: '/upload',
            component: upload
        },
        {
            path: '/rate',
            component: rate
        },
        {
            path: '/colorPicker',
            component: colorPicker
        },
        {
            path: '/transfer',
            component: transfer
        },
        {
            path: '/form',
            component: form
        }
    ],
    // mode: "history"
});

export default router;

