const webpack = require('webpack');

module.exports = {
    // Tell webpack to run babel on every file it runs through
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
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
                    presets: ['react-plus'],
                    plugins: ['transform-css-import-to-string']
                }
            }
        ]
    }
};
