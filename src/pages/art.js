import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './art.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import QueriedImages from '../components/Functions/ImageQuery';

const originalColors = ['#cec0e7', '#a480d7', '#5000b8', '#3b0086'];

class Art extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sectionsColor: [...originalColors],
			fullpages: [
				{
					header: 'Emotes',
					folder: 'emotes',
				},
				{
					header: 'Character Art',
					folder: 'characterArt',
				},
				{
					header: 'Apparel Designs',
					folder: 'apparelDesigns',
				},
				{
					header: 'Miscellaneous',
					folder: 'miscArt',
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
						licenseKey="xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx"
						debug={true}
						anchors={[
							'emotes',
							'character-art',
							'apparel-designs',
							'miscellaneous',
						]}
						navigation={true}
						navigationTooltips={['Emotes', 'Characters', 'Apparel', 'Misc.']}
						// recordHistory={false}
						scrollOverflow={true}
						loopTop={true}
						loopBottom={true}
						fixedElements={'#navbar'}
						sectionSelector={'.section'}
						sectionsColor={this.state.sectionsColor}
						render={(comp) => (
							<ReactFullpage.Wrapper>
								{fullpages.map((page) => (
									<div key={page.folder} className={`section ${page.state}`}>
										<div className={styles.artContainer}>
											<h1 className={styles.artHeader}>{page.header}</h1>
											<div className={styles.artContentContainer}>
												<div className={styles.artContent}>
													<QueriedImages folder={page.folder} />
												</div>
											</div>
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
