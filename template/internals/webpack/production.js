const ImageminPlugin = require('imagemin-webpack-plugin').default;

// eslint-disable-next-line func-names
module.exports = async function() {
    this.extendBuild((config, { isDev }) => {
        if (!isDev) {
            config.plugins.push(
                new ImageminPlugin({
                    test: /\.(jpe?g|png|gif|svg)$/i,
                })
            );
        }
    });
};
