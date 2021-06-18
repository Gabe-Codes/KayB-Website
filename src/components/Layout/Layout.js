import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import * as styles from './layout.module.scss';
import '../../../static/reset.scss';

const Layout = (props) => {
	return (
		<div className={styles.outerContainer}>
			<Navbar />
			<div className={styles.innerContainer}>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
