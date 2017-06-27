const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: [

        // 'webpack-hot-middlewares/client',
        'babel-polyfill',
        './src/index.js'
    ],
    output:{
        path: __dirname + '/public/build/',
        publicPath: "build",
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js?$/,
                exclude: [/node_modules/, /public/],
                loader: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};