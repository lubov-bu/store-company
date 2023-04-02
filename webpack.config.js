const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: { beautyStore: path.resolve(__dirname, "./src/index.js") },
    output: {
        path: path.resolve(__dirname, "./dist")
    },
    module: {

    }
}