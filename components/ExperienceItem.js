import styles from './../styles/ExperienceItem.module.scss';
import { motion } from 'framer-motion';

const itemMotionProps = {
    variants: {
        initial: {
            opacity: 0,
            y: -80,
        },
        animate: {
            y: 0,
            opacity: 1,
        },
        transition: {
            duration: 0.5,
            ease: [0.22, 0.22, 0.5, 1],
        },
    },
};

export default function ExperienceItem({
    company,
    position,
    location,
    brief,
    start,
    end,
    projects,
}) {
    return (
        <motion.li {...itemMotionProps}>
            <h4 className={styles.company}>
                {position} at {company}, {location}
            </h4>
            <p className={styles.brief}>{brief}</p>
            <span className={styles.period}>
                {start} - {end}
            </span>
            <div className={styles.projectsList}>
                {projects &&
                    projects.length > 0 &&
                    projects.map((project, index) => (
                        <p key={index} className={styles.projectsItem}>
                            {project}
                        </p>
                    ))}
            </div>
        </motion.li>
    );
}
