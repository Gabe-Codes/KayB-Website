import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './art.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = [
	'#ff5f45',
	'#0798ec',
	'#fc6c7c',
	'#435b71',
	'orange',
	'blue',
	'purple',
	'yellow',
];

class Art extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sectionsColor: [...originalColors],
			fullpages: [
				{
					text: 'Emotes',
				},
				{
					text: 'Character Art',
				},
				{
					text: 'Apparel Designs',
				},
				{
					text: 'Miscellaneous',
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
								{fullpages.map(({ text }) => (
									<div key={text} className={SEL}>
										<div className={styles.artContainer}>
											<h1 className={styles.artHeader}>{text}</h1>
											<div className={styles.artContent}>Content</div>
										</div>
									</div>
								))}
								{/* <div key="Emotes" className={SEL}>
									<div className={styles.artContainer}>
										<h1 className={styles.artHeader}>Emotes</h1>
										<div className={styles.artContent}>
											<div className="section">
												<div className="slide" data-anchor="slide1">
													<h3>Slide 2.1</h3>
												</div>
												<div className="slide" data-anchor="slide2">
													<h3>Slide 2.2</h3>
												</div>
												<div className="slide" data-anchor="slide3">
													<h3>Slide 2.3</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div key="Character Art" className={SEL}>
									<div className={styles.artContainer}>
										<h1 className={styles.artHeader}>Character Art</h1>
										<div className={styles.artContent}>Content</div>
									</div>
								</div>
								<div key="Apparel Designs" className={SEL}>
									<div className={styles.artContainer}>
										<h1 className={styles.artHeader}>Apparel Designs</h1>
										<div className={styles.artContent}>Content</div>
									</div>
								</div>
								<div key="Miscellaneous" className={SEL}>
									<div className={styles.artContainer}>
										<h1 className={styles.artHeader}>Miscellaneous</h1>
										<div className={styles.artContent}>Content</div>
									</div>
								</div> */}
							</ReactFullpage.Wrapper>
						)}
					/>
				</main>
			</Layout>
		);
	}
}

export default Art;
