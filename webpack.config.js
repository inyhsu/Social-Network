const path = require('path');
const { web } = require('webpack');

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
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
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
        ]
    },
    //to fixed the auto reload
    target: "web",
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
    },
};