const debug   = process.env.NODE_ENV ? false : true
const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: debug ? "inline-sourcemap" : false,

    entry: path.resolve(__dirname, 'src/app/index.jsx'),

    output: {
        path: '/build',
        filename: 'bundle.js',

        /*
            tells webpack where to serve bundle in memory
            instead of having it at /build/, set it to /

            virtual bundle needs to be on root directory
            when running on server, we target src=./bundle
            as the server is running on root, but serving
            /build directory
        */
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test    : /\.js?x$/,
                exclude : [/(node_modules)/, path.resolve(__dirname, 'js/vendor/')],
                loader  : 'babel-loader',
                options : {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                }
            },
            {
                test: /\.s?css$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            }
        ]
    },

    resolve: {
        extensions: [' ', '.js', '.jsx', '.es6', '.css', '.scss'],
        alias: {}
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ]
}
