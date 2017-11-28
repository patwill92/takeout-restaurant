const webpack = require('webpack');

module.exports = {
    // Tell webpack to run babel on every file it runs through
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
                DEBUG: JSON.stringify(true)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react-plus',
                        'es2017'
                    ],
                    plugins: ['transform-css-import-to-string']
                }
            }
        ]
    }
};
