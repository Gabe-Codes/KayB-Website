import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.scss';

const Index = () => {
	return (
		<Layout>
			<main>
				<div className={styles.indexContainer}>
					<h1>Sierra Pogchamp</h1>
				</div>
			</main>
		</Layout>
	);
};

export default Index;
