const path = require('path')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')

// merge whatever is in 'common' with this new object we are defining
module.exports = merge(common, {
	mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[hash][ext]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                ]
            },
        ]
    }
})