import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';

import Grid from './../components/Layout/Grid';
import Header from './../components/Layout/Header';
import PageContent from './../components/Layout/PageContent';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const introMotionProps = {
    initial: 'introInitial',
    animate: 'introAnimate',
    variants: {
        introInitial: {
            scale: 0.9,
        },
        introAnimate: {
            scale: 1,
        },
    },
    transition: {
        duration: 0.7,
    },
};

export default function Home() {
    return (
        <Grid>
            <Header headTitle="Nikolaj Jepsen - webudvikler" />
            <PageContent justifyCenter={true} className="background--skies">
                <motion.div {...introMotionProps}>
                    <div className={styles.introContainer}>
                        <div className={styles.introImage}>
                            <img
                                src="/images/profile-image.jpg"
                                alt="Nikolaj Jepsen"
                            />
                        </div>
                        <h1 className="display-1">Hi, I'm Nikolaj.</h1>
                        <div className={styles.icons}>
                            <a
                                href="https://github.com/nikolajjepsen/"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nikolajsjepsen/"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </PageContent>
        </Grid>
    );
}
