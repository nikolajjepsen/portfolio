import experiences from '../data/experiences.json';
import styles from '../styles/Experiences.module.scss';

import Grid from './../components/Layout/Grid';
import Header from './../components/Layout/Header';
import PageContent from './../components/Layout/PageContent';

import ExperienceItem from './../components/ExperienceItem';

export default function Experiences() {
    return (
        <Grid>
            <Header headTitle="Nikolaj Jepsen - Experiences" />
            <PageContent sectionTitle="Experiences" hasAside={true}>
                <ul className={styles.timeline}>
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
                </ul>
            </PageContent>
        </Grid>
    );
}
