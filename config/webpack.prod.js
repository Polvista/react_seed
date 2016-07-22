var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');
var WebpackMd5Hash = require('webpack-md5-hash');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {

    devtool: 'source-map',

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },

    module: {
        loaders: [
            {
                test: /app\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", 'css!postcss!sass')
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: { screw_ie8: true },
            comments: false,
            screw_ie8: true
        }),
        new WebpackMd5Hash(),

        new ExtractTextPlugin('styles.[hash].css'),

        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV),
                'ENV': JSON.stringify(ENV)
            }
        })
    ],

    tslint: {
        emitErrors: true,

        failOnHint: false
    },

    resolve: {
        alias: {
            //'seamless-immutable': path.resolve(__dirname, '../node_modules/seamless-immutable/seamless-immutable.production.min.js'),
            'redux': path.resolve(__dirname, '../node_modules/redux/dist/redux.min.js')
        }
    }

});

