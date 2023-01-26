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
            <Header headTitle="Nikolaj Jepsen - software developer" />
            <PageContent justifyCenter={true} className="background--skies">
                <motion.div {...introMotionProps}>
                    <div className={styles.introContainer}>
                        <div className={styles.introImage}>
                            <img
                                src="/images/profile-image.webp"
                                alt="Nikolaj Jepsen"
                            />
                        </div>
                        <div className={styles.introName}>
                            <h1 className="display-1">Hi, I'm Nikolaj.</h1>
                            <div className={styles.icons}>
                                <a
                                    href="https://github.com/nikolajjepsen/"
                                    aria-label="View my Github"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nikolajsjepsen/"
                                    aria-label="Find me on LinkedIn"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </PageContent>
        </Grid>
    );
}
