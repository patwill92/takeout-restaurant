const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let define = [new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
        DEBUG: JSON.stringify(true)
    }
})];

let uglify = [new UglifyJSPlugin()];

let plugins = process.env.NODE_ENV ? [...define, ...uglify] : [...define];


const config = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: plugins
};

module.exports = merge(baseConfig, config);
