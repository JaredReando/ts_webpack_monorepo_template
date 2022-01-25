const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
	entry: {
		main: "./src/index.tsx",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html")
		})
	],
	resolve: {
		// Tells webpack -- when you see import statements, prioritize these extensions, in this order.
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					"ts-loader", 
				]
			},
			{
				test: /\.html$/,
				loader: "html-loader", 
				options: {
					minimize: false
				}
			},
			// use in place of file-loader for bundling images
			{
				test: /\.(svg|png|jpg|gif)$/,
				type: 'asset/resource',
			}
		]
	}
}