var webpack = require('webpack');
var path = require('path');

const config = process.env.NODE_ENV === 'production' ?
    {
        entry: {
            app: './app/index',
            vendors: ['react', 'react-dom', 'react-router', './lib/bootstrap/bootstrap.min.css', 'redux', 'react-redux', 'react-router-redux']
        },

        output: {
            path: path.join(__dirname, 'public/build'),
            filename: 'bundle.js',
            publicPath: 'build/'
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
            new webpack.optimize.UglifyJsPlugin()
        ],

        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$|index.html/,
                loader : 'file-loader'
            }]
        }
    }

    :

    {
        entry: {
            app:[
                'webpack/hot/only-dev-server',
                './app/index'
            ],
            vendors: ['react', 'react-dom', 'react-router', './lib/bootstrap/bootstrap.min.css', 'redux', 'react-redux', 'react-router-redux']
        },

        output: {
            path: path.join(__dirname, 'public/build'),
            filename: 'bundle.js',
            publicPath: 'build/'
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
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
            new webpack.HotModuleReplacementPlugin()
        ],

        /*devtool: 'eval-source-map',*/

        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$|index.html/,
                loader : 'file-loader'
            }]
        }
    };

module.exports = config;