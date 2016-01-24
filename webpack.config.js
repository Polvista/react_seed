var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8000',
        'webpack/hot/only-dev-server',
        './src/containers/index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    /*devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        stats: 'errors-only'
    },*/

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'eval',

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }]
    }
};