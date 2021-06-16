import React from 'react';
import * as styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; Sierra Hernandez {new Date().getFullYear()}</p>
			<section></section>
		</footer>
	);
};

export default Footer;
