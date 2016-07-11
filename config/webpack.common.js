var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');

module.exports = {
    entry: {
        app: './app/index.tsx',
        vendors: './config/vendors.ts'
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },

    module: {

        preLoaders: [
            {
                test: /\.tsx?$/,
                loader: 'tslint'
            }
        ],

        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['babel', 'ts']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.scss$/,
                exclude: [/app\.scss$/],
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test   : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)/,
                loader : 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendors']
        }),

        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ],

    resolve: {
        extensions: ['', '.tsx', '.ts', '.jsx', '.js', '.css']
    },

    postcss: function () {
        return [autoprefixer(), rucksack()];
    }
};