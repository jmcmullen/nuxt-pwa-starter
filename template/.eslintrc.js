const { join } = require('path');

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'plugin:vue/essential',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            { singleQuote: true, trailingComma: 'es5' },
        ],
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                vue: 'never',
            },
        ],
        'import/prefer-default-export': 0,
        'import/no-dynamic-require': 0,
        'no-param-reassign': 0,
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 3,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    normal: 'any',
                },
            },
        ],
        'vue/html-indent': [
            2,
            4,
            {
                attribute: 1,
                closeBracket: 0,
            },
        ],
    },
    settings: {
        'import/core-modules': [
            'vuex',
            'vue',
            'vue-server-renderer',
            'vue-router',
            'vuex-router-sync',
            'webpack-node-externals',
        ],
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        extensions: ['.js', '.vue'],
                        alias: {
                            '~': join(__dirname, 'src'),
                            '@': join(__dirname, 'src'),
                        },
                    },
                },
            },
        },
    },
};
