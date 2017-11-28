const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // Tell webpack to run babel on every file it runs through
    plugins: [
        new UglifyJSPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react-plus'
                    ],
                    plugins: ['transform-css-import-to-string']
                }
            }
        ]
    }
};
