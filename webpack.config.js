var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './app/index'
    ],

    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js',
        publicPath: 'build'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',

        proxy: {
            '*': 'http://localhost:9090'
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    /*devtool: 'eval-source-map',*/

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        },{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$|index.html/,
            loader : 'file-loader'
        }]
    }
};