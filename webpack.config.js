const path = require('path')
module.exports = {
    entry: './src/server.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack-bundle.js',
    },
    module: {
        rules: [{test: 'file type', use: 'loader'}]
    },
    mode: 'development'
}