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
				path: `${__dirname}/src/assets/art-page/emotes`,
				name: 'emotes',
			},
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets/art-page/character-art`,
				name: 'character-art',
			},
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets/art-page/apparel-designs`,
				name: 'apparel-designs',
			},
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets/art-page/misc-art`,
				name: 'misc-art',
			},
		},
	],
};
