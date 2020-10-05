import styles from './../styles/ExperienceItem.module.scss';

import { Card, CardHeader, CardBody, CardBottom } from './Card';

export default function ExperienceItem({
    name,
    type,
    description,
    stack,
    image,
    github,
}) {
    return (
        <Card variant="dark">
            <CardHeader>
                <p className={styles.title}>{type}</p>
                <h2>{name}</h2>
            </CardHeader>
            <CardBody>
                <img src={image} />
            </CardBody>
        </Card>
    );
}
