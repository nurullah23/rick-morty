const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',   
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },  
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    plugins: [                           
        new webpack.HotModuleReplacementPlugin()
    ]
});