import React from 'react';
import { ProjectsContainer, ProjectCard, CardContainer, ProjectTitle, ProjectDescription, ButtonContainer, ProjectLink, ProjectImage, ProjectDetails, ProjectsHeader, ProjectsWrapper } from './styles';

import project1Image from 'assets/img/project1.jpeg';
import project2Image from 'assets/img/project2.png';
import project3Image from 'assets/img/project3.png';
import project4Image from 'assets/img/project4.png';

const projects = [
  {
    title: 'Coffea Shop ecommerce',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://github.com/jamilecadias/ecommerce_coffea_shop',
    image: project1Image,
  },
  {
    title: 'Espacio Zen',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'https://github.com/jamilecadias/yoga-angular-project',
    image: project2Image,
  },
  {
    title: 'Collaborative storytelling page',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: 'https://github.com/jamilecadias/proyecto_python',
    image: project3Image,
  },
  {
    title: 'Conexão Brasil ',
    description: 'Dashboard to manage users of a language course with a CRUD system in Node.js, using APIs.',
    link: 'https://github.com/jamilecadias/proyecto_python',
    image: project4Image,
  },
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsHeader>
          <h1>Projects</h1>
        </ProjectsHeader>
        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectDetails>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ButtonContainer>
                  <ProjectLink href={project.link} target="_blank">
                    Github
                  </ProjectLink>
                  <ProjectLink href={project.link} target="_blank">
                    View
                  </ProjectLink>
                </ButtonContainer>
              </ProjectDetails>
            </ProjectCard>
          ))}
        </CardContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;