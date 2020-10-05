import styles from './../styles/ExperienceItem.module.scss';
import { motion } from 'framer-motion';

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
        <li>
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
        </li>
    );
}
