import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './imageQuery.module.scss';

const QueriedImages = (props) => {
	const folderSelector = (folder, data) => {
		switch (folder) {
			case 'emotes':
				return data.data.emotes;
			case 'characterArt':
				return data.data.characterArt;
			case 'apparelDesigns':
				return data.data.apparelDesigns;
			case 'miscArt':
				return data.data.miscArt;
			default:
				return data.data.emotes;
		}
	};

	const Images = ({ data }) => (
		<>
			{folderSelector(props.folder, data).edges.map((edge) => {
				let image = getImage(edge.node);
				return (
					<GatsbyImage
						className={styles.artImageContainer}
						imgClassName={styles.artImage}
						image={image}
						alt=""
					/>
				);
			})}
		</>
	);

	return (
		<StaticQuery
			query={graphql`
				query {
					emotes: allFile(
						filter: {
							extension: { eq: "png" }
							sourceInstanceName: { eq: "emotes" }
						}
					) {
						edges {
							node {
								childImageSharp {
									gatsbyImageData(layout: CONSTRAINED)
								}
							}
						}
					}

					characterArt: allFile(
						filter: {
							extension: { eq: "png" }
							sourceInstanceName: { eq: "characterArt" }
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

					apparelDesigns: allFile(
						filter: {
							extension: { eq: "png" }
							sourceInstanceName: { eq: "apparelDesigns" }
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

					miscArt: allFile(
						filter: {
							extension: { eq: "png" }
							sourceInstanceName: { eq: "miscArt" }
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
			render={(data) => <Images data={{ data }} />}
		/>
	);
};

export default QueriedImages;
