const path = require('path');

module.exports = {    
    entry: [
        './src/index.js',
        './src/styles/main.scss'
    ], 
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            }
        },
        {
            test: /\.(png|svg|jpg|gif)?$/,
            loader: 'file-loader',
            exclude: [/node_modules/]
        }]
    },
};