const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
    head: {
        title: '{{ name }}',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: '{{escape description }}',
            },
        ],
    },

    loading: { color: '#3B8070' },
});
