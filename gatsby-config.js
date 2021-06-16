module.exports = {
	siteMetadata: {
		title: 'Sierra Portfolio',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				cssLoaderOptions: {
					modules: {
						exportLocalsConvention: 'camelCaseOnly',
					},
				},
			},
		},
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
