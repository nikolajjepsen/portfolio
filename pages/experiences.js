import experiences from '../data/experiences.json';
import styles from '../styles/Experiences.module.scss';

import { motion } from 'framer-motion';
import Grid from './../components/Layout/Grid';
import Header from './../components/Layout/Header';
import PageContent from './../components/Layout/PageContent';

import ExperienceItem from './../components/ExperienceItem';

const experiencesVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const experiencesMotionProps = {
    initial: 'initial',
    animate: 'animate',
    variants: experiencesVariants,
};

export default function Experiences() {
    return (
        <Grid>
            <Header headTitle="Nikolaj Jepsen - Experiences" />
            <PageContent sectionTitle="Experiences" hasAside>
                <motion.ul
                    {...experiencesMotionProps}
                    className={styles.timeline}
                >
                    {experiences.map((experience) => (
                        <ExperienceItem
                            key={`${experience.position} ${experience.company}`}
                            company={experience.company}
                            position={experience.position}
                            location={experience.location}
                            brief={experience.brief}
                            start={experience.start}
                            end={experience.end}
                            projects={experience.projects}
                        />
                    ))}
                </motion.ul>
            </PageContent>
        </Grid>
    );
}
