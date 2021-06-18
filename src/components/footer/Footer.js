import React from 'react';
import * as styles from './footer.module.scss';
import logo from '../../assets/img/kayblogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className={styles.footer} id="footer">
			<div className={styles.footerContent}>
				<section className={styles.imgWrapper}>
					<img src={logo} alt="" />
				</section>
				<p>Copyright &copy; Sierra Hernandez {new Date().getFullYear()}</p>
				<section>
					<a
						className={styles.twitter}
						href="https://twitter.com/AstralKayB"
						target="blank"
					>
						<FontAwesomeIcon size="l" icon={faTwitter} />
					</a>
					<a
						className={styles.twitch}
						href="https://www.twitch.tv/lkayb"
						target="blank"
					>
						<FontAwesomeIcon size="l" icon={faTwitch} />
					</a>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
