import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Images = ({ data }) => (
	<>
		{console.log(data)}
		{data.allFile.edges.map((edge) => {
			let image = getImage(edge.node);
			return <GatsbyImage image={image} alt="" />;
		})}
	</>
);

const QueriedImages = (props) => {
	console.log(props);
	return (
		<StaticQuery
			query={graphql`
				{
					allFile(
						filter: {
							extension: { eq: "png" }
							sourceInstanceName: { eq: "emotes" }
						}
					) {
						edges {
							node {
								childImageSharp {
									gatsbyImageData(width: 300)
								}
							}
						}
					}
				}
			`}
			render={(data) => <Images data={data} {...props} />}
		/>
	);
};

export default QueriedImages;
