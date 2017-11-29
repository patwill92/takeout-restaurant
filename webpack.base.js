module.exports = {
    devtool: "source-map",
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
