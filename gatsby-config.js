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
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'emotes',
				path: `${__dirname}/src/assets/art-page/emotes`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'characterArt',
				path: `${__dirname}/src/assets/art-page/characterArt`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'apparelDesigns',
				path: `${__dirname}/src/assets/art-page/apparelDesigns`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'miscArt',
				path: `${__dirname}/src/assets/art-page/miscArt`,
			},
		},
	],
};
