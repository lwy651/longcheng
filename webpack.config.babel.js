import webpack from 'webpack';

module.exports = {
	entry:{
		index:'./index.jsx'
	},
	output:{
		path:'./dist',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'babel'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			}
		]
	}
}