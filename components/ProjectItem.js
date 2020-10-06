import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styles from './../styles/ProjectItem.module.scss';

import { Card, CardHeader, CardBody } from './Card';

const itemVariant = {
    initial: {
        scale: 0.95,
    },
    animate: {
        scale: 1,
        transition: {
            type: 'tween',
        },
    },
};

export default function ExperienceItem({ name, type, image, github }) {
    return (
        <motion.div variants={itemVariant}>
            <Card variant="dark">
                <CardHeader>
                    <div className={styles.meta}>
                        <p className={styles.title}>{type}</p>
                        <h2>{name}</h2>
                    </div>
                    {github && (
                        <div className={styles.buttons}>
                            <a href={github} target="_blank">
                                <FaGithub /> <span>View On Github</span>
                            </a>
                        </div>
                    )}
                </CardHeader>
                <CardBody>
                    <img src={image} />
                </CardBody>
            </Card>
        </motion.div>
    );
}
