const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/playground/promises.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};