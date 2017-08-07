var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('helpers');

module.exports = {
	entry: {
		polyfills: './src/polyfills.ts',
		app: "./src/main.ts",
		vendor: "./src/vendor/vendor.ts"
	},
	output: {
		path: __dirname,
		filename: "./src/bundle/[name].js",
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: "awesome-typescript-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin('HuanBang Software')//,
		//new HtmlWebpackPlugin({ template: './src/index.html'})
	]
	// devServer: {
	// 	historyApiFallback: true,
	// 	stats: 'minimal'
	// }
};