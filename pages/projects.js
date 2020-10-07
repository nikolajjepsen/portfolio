import styles from '../styles/Experiences.module.scss';

import projects from './../data/projects.json';

import Grid from './../components/Layout/Grid';
import { FlexGrid, Col } from './../components/Layout/FlexGrid';
import Header from './../components/Layout/Header';
import PageContent from './../components/Layout/PageContent';

import ProjectItem from './../components/ProjectItem';
import { motion } from 'framer-motion';

const projectsVariants = {
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

const projectsMotionProps = {
    initial: 'initial',
    animate: 'animate',
    variants: projectsVariants,
};

export default function Projects() {
    return (
        <Grid>
            <Header
                headTitle="Nikolaj Jepsen - Projects"
                metaDescription={`My name is Nikolaj, and I'm a web developer using primarily PHP, MySQL, React & jQuery. 
                    These are some of the projects I've been working on.`}
            />
            <PageContent hasAside>
                <motion.div {...projectsMotionProps}>
                    <FlexGrid size="half">
                        {projects.map((project) => (
                            <Col key={project.name}>
                                <ProjectItem
                                    name={project.name}
                                    type={project.type}
                                    stack={project.stack}
                                    description={project.description}
                                    image={project.images[0]}
                                    github={
                                        project.github ? project.github : false
                                    }
                                    slug={project.slug ? project.slug : false}
                                />
                            </Col>
                        ))}
                    </FlexGrid>
                </motion.div>
            </PageContent>
        </Grid>
    );
}
