import React from 'react';
import { Link } from 'gatsby';
import * as styles from './navbar.module.scss';
import logo from '../../assets/img/ZeroNoon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.imgWrapper}>
				<img src={logo} alt="" />
			</div>
			<input type="checkbox" id="nav-toggle" className={styles.check} />
			<div className={styles.pages}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/art">Art</Link>
				<Link to="/commissions">Commissions</Link>
			</div>
			<section>
				<a
					className={styles.twitter}
					href="https://twitter.com/AstralKayB"
					target="blank"
				>
					<FontAwesomeIcon size="2x" icon={faTwitter} />
				</a>
				<a
					className={styles.twitch}
					href="https://www.twitch.tv/lkayb"
					target="blank"
				>
					<FontAwesomeIcon size="2x" icon={faTwitch} />
				</a>
			</section>
		</nav>
	);
};

export default Navbar;
