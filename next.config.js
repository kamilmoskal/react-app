const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
	distDir: 'build',
	webpack: config => {
		config.resolve.modules.push(__dirname);
		config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

		return config;
	},
	env: {
		TMDB_API_KEY: process.env.TMDB_API_KEY,
	},
};
