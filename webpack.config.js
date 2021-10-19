const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js' // Where to pack
    },
    output: {
        filename: 'bundle.js', // pack as
        path: path.resolve('./build'), // pack at 
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
    },
};