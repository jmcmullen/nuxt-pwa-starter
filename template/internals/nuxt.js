const path = require('path');
const { manifest } = require('./manifest');

module.exports = {
    // Sources directory
    srcDir: 'src',

    // Webpack build
    build: {
        extractCSS: true,
        cssSourceMap: true,
        optimization: {
            splitChunks: {
                name: true,
            },
        },
    },

    // Styles
    css: ['~/assets/scss/theme.scss'],

    // Include sass variables inside components.
    sassResources: [
        path.resolve(__dirname, '../src/assets/scss/settings/variables.scss'),
        path.resolve(__dirname, '../src/assets/scss/mixins/helpers.scss'),
        path.resolve(__dirname, '../src/assets/scss/mixins/media-queries.scss'),
        path.resolve(__dirname, '../src/assets/scss/global/forms.scss'),
        path.resolve(__dirname, '../src/assets/scss/mixins/index.scss'),
    ],

    // Plugins
    plugins: [
        {
            src: '~/plugins/lazyload.js',
            ssr: false,
        },
    ],

    // Nuxt modules
    modules: [
        // Community modules
        '@nuxtjs/pwa',
        '@nuxtjs/component-cache',
        'nuxt-sass-resources-loader',

        // Custom modules
        './internals/webpack/base',
        './internals/webpack/development',
        './internals/webpack/production',

        ['@nuxtjs/dotenv', { path: path.join(__dirname, '../') }],
    ],

    // System scope variables.
    env: {
        TODO: process.env.TODO,
    },

    // Generate dynamic routes from our content folder.
    generate: {
        fallback: '404.html',
    },

    router: {
        // Scroll to top on new page.
        scrollBehavior() {
            return {
                x: 0,
                y: 0,
            };
        },
    },

    // External modules
    vendor: ['vuex'],

    // Web App Manifest
    manifest,
};
