var path = require('path');

module.exports = {
    entry: {
        main: './src/plugin'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "openmct-dynamic-plans.js",
        library: "DynamicPlansPlugin",
        libraryTarget: "umd"
    }
};