const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(website, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(website, '/dist')},
    module:{
        rules:[{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        }]
    },
    plugins:[
        new 'react-image-gallery'(
           {template: path.join(website,'/src/index.html')}
        )
    ]
 }