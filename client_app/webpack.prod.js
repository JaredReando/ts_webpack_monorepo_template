const path = require('path')
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
	mode: 'production',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
		// Destroy everything in the dist folder before building anew
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
					"style-loader", // 2. Inject styles into DOM
                    "css-loader" // 1. Turn css into commonjs
                ]
    
            }
        ], 
    }
})