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

	const sizeSelector = (width, height) => {
		const ratio = width >= height ? 'artWide' : 'artTall';

		if (width <= 300) return styles[ratio + 'Small'];
		else if (width <= 900) return styles[ratio + 'Medium'];
		else return styles[ratio + 'Large'];
	};

	const Images = ({ data }) => (
		<>
			{folderSelector(props.folder, data).edges.map((edge) => {
				let image = getImage(edge.node);
				console.log(image);
				return (
					<GatsbyImage
						className={sizeSelector(image.width, image.height)}
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
									gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
									gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
									gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
									gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
