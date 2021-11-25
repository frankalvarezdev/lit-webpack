const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, args) => {

    const isProduction = args.mode === 'production';

    return {
        entry: './src/index.ts',
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                chunksSortMode: 'none',
                template: './src/template.html'
            }),
            new CopyPlugin({
                patterns: [{
                    from: "public"
                }],
            })
        ],
        devtool: isProduction ? false : 'source-map'
    }
}