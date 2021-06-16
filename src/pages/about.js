import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './about.module.scss';
import sierraPic from '../assets/img/sierra.png';

const About = () => {
	return (
		<Layout>
			<main>
				<div className={styles.aboutContainer}>
					<div className={styles.text}>
						<h1 className={styles.header}>About Me</h1>
						<p className={styles.description}>
							<br />
							Hi I'm Sierra or "KayB". I'm a 24 year old artist residing in
							Dallas Texas. I have been drawing digitally for over 9 years now.
							I am currently a freelance Artist. I have worked with 100 Thieves,
							FaZe Atlanta, OpTic Gaming, Houston Outlaws, Obey Alliance, Turtle
							Beach and many more! I have also worked with many YouTubers and
							Streamers with very well established brands. While on my site you
							can see my work and learn more about my art. Enjoy!
						</p>
					</div>
					<div className={styles.image}>
						<img src={sierraPic} alt="" />
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default About;
