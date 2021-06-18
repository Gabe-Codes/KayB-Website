import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './art.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import QueriedImages from '../components/Functions/ImageQuery';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = ['#cec0e7', '#a480d7', '#5000b8', '#3b0086'];

class Art extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sectionsColor: [...originalColors],
			fullpages: [
				{
					pageInfo: {
						header: 'Emotes',
						folder: 'emotes',
					},
				},
				{
					pageInfo: {
						header: 'Character Art',
						folder: 'character-art',
					},
				},
				{
					pageInfo: {
						header: 'Apparel Designs',
						folder: 'apparel-designs',
					},
				},
				{
					pageInfo: {
						header: 'Miscellaneous',
						folder: 'misc-art',
					},
				},
			],
		};
	}

	render() {
		const { fullpages } = this.state;
		return (
			<Layout>
				<main>
					<ReactFullpage
						debug
						navigation
						anchors={[
							'emotes',
							'character-art',
							'apparel-designs',
							'miscellaneous',
						]}
						continuousVertical={true}
						fixedElements={'#navbar'}
						sectionSelector={SECTION_SEL}
						sectionsColor={this.state.sectionsColor}
						render={(comp) => (
							<ReactFullpage.Wrapper>
								{fullpages.map(({ pageInfo }) => (
									<div key={pageInfo.folder} className={SEL}>
										<div className={styles.artContainer}>
											<h1 className={styles.artHeader}>{pageInfo.header}</h1>
											<QueriedImages folder={pageInfo.folder} />
										</div>
									</div>
								))}
							</ReactFullpage.Wrapper>
						)}
					/>
				</main>
			</Layout>
		);
	}
}

export default Art;
