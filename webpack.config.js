var path = require('path');
var webpack = require('webpack');
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
	entry:[ 
	"script!jquery/dist/jquery.min.js",
	"script!foundation-sites/dist/foundation.min.js",
	"./app/index.jsx"
	],

	
	externals: {
		jquery: "jQuery"
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor:{
				warnings: false
			}
		})
	],
	
	output: {path: __dirname, filename: './public/bundle.js'},
	module: {
				loaders: [
					{
						test: /\.jsx?$/,
						loader: 'babel-loader',
						exclude: /(node_modules|bower_components)/,
						query: {presets: ['es2015', 'react', 'stage-0']}	
					},
					//{ test: /\.css$/, loader: "style!css" },
					//{loader: 'script-loader'}
				]
			},
			resolve: {
				root: __dirname,
				//webpack will always look in components by default
				//rather than typing out tons of aliases
				modulesDirectories: [ 
					'node_modules',
					'./app/components',
					'./app/api'
				],
			//alias - makes it easier to definre components
			alias: {
					app: 'app',
					//Main: 'app/components/main.jsx',
					applicationStyles: 'app/styles/app.scss',
					actions: 'app/actions/actions.jsx',
					reducers: 'app/reducers/reducers.jsx',
					configureStore: 'app/store/store.jsx'
				},
				extensions: ['', '.js', '.jsx']
			},

			sassLoader: {
				includePaths: [
					path.resolve(__dirname, './node_modules/foundation-sites/scss')
				]
			},

			devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'


};


