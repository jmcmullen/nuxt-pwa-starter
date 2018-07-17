const StyleLintPlugin = require('stylelint-webpack-plugin');

// eslint-disable-next-line func-names
module.exports = async function() {
    this.extendBuild((config, { isClient }) => {
        if (isClient) {
            config.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
            });
        }

        config.plugins.push(
            new StyleLintPlugin({
                syntax: 'scss',
            })
        );
    });
};
