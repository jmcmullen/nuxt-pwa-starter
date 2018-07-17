import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

// Install Vue-lazyload
Vue.use(VueLazyLoad, {
    observer: true,
    listenEvents: [
        'popstate',
        'scroll',
        'wheel',
        'mousewheel',
        'resize',
        'animationend',
        'transitionend',
    ],
});
