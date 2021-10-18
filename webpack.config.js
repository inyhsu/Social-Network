const path = require('path');
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
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
    },
};