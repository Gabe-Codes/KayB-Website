import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './art.module.scss';
import ReactFullpage from '@fullpage/react-fullpage';

const Art = () => {
	<ReactFullpage
		//fullpage options
		licenseKey={'YOUR_KEY_HERE'}
		scrollingSpeed={1000} /* Options here */
		render={({ state, fullpageApi }) => {
			return (
				<Layout>
					<h1>ART</h1>
					<ReactFullpage.Wrapper>
						<div className="section">
							<p>Section 1 (welcome to fullpage.js)</p>
							<button onClick={() => fullpageApi.moveSectionDown()}>
								Click me to move down
							</button>
						</div>
						<div className="section">
							<p>Section 2</p>
						</div>
					</ReactFullpage.Wrapper>
				</Layout>
			);
		}}
	/>;
	// return (
	// 	<Layout>
	// 		<main>
	// 			<div className={styles.artContainer}>
	// 				<h1>ART</h1>
	// 			</div>
	// 		</main>
	// 	</Layout>
	// );
};

export default Art;
