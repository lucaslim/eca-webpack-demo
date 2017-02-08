const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_ENTRY = './src/main.js';
const NODE_ENV = process.env.NODE_ENV || 'development';
const __DEV__ = NODE_ENV === 'development';
const __PROD__ = NODE_ENV === 'production';

let webpackConfig = {
    entry: {
        bundle: __PROD__
            ? [APP_ENTRY]
            : [APP_ENTRY].concat([
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server'
            ]),
        shared: [
            'react',
        ]
    },
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: ['transform-runtime'],
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['shared']
        })
    ],
    resolve: {
        modules: [
            `${__dirname}/src`,
            'node_modules'
        ],
        extensions: ['.js', '.scss']
    },
    devServer: {
        hot: true,
        contentBase: `${__dirname}/build`,
        publicPath: '/',
    }
};

if (__PROD__) {
    webpackConfig.module.rules.push({
        test: /.(scss|sass)$/,
        use: ExtractTextPlugin.extract([
            'css-loader',
            'sass-loader'
        ])
    })

    webpackConfig.plugins.push(
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    )
} else if (__DEV__) {
    webpackConfig.module.rules.push({
        test: /.(scss|sass)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    })

    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    )
}

module.exports = webpackConfig;