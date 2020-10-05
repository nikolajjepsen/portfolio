import styles from '../styles/Experiences.module.scss';

import projects from './../data/projects.json';

import Grid from './../components/Layout/Grid';
import { FlexGrid, Col } from './../components/Layout/FlexGrid';
import Header from './../components/Layout/Header';
import PageContent from './../components/Layout/PageContent';

import ProjectItem from './../components/ProjectItem';

export default function Projects() {
    return (
        <Grid>
            <Header headTitle="Nikolaj Jepsen - Projects" />
            <PageContent hasAside={true}>
                <FlexGrid size="half">
                    {projects.map((project) => (
                        <Col>
                            <ProjectItem
                                name={project.name}
                                type={project.type}
                                stack={project.stack}
                                image={project.image}
                            />
                        </Col>
                    ))}
                </FlexGrid>
            </PageContent>
        </Grid>
    );
}
