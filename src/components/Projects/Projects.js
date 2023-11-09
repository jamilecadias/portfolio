import React from 'react';
import { ProjectsContainer, ProjectCard, CardContainer, ProjectTitle, ProjectDescription, ButtonContainer, ProjectLink, ProjectImage, ProjectDetails, ProjectsHeader, ProjectsWrapper } from './styles';

import project1Image from 'assets/img/project1.jpeg';
import project2Image from 'assets/img/project2.png';
import project3Image from 'assets/img/project3.png';
import project4Image from 'assets/img/project4.png';
import project5Image from 'assets/img/project5.png'
import project6Image from 'assets/img/project6.jpeg'

const projects = [
  {
    title: 'Coffea Shop E-commerce',
    description: 'E-commerce of a specialty coffee shop with CRUD-based user and product management system and Mysql database. Final project in a full stack course team.',
    link: 'https://github.com/jamilecadias/ecommerce_coffeaShop',
    weblink: '',
    image: project1Image,
  },
  {
    title: 'Espacio Zen',
    description: 'Webpage to manage the registration of students to different Yoga courses, with CRUD system of users and courses. Individual final project in Angular for Angular course.',
    link: 'https://github.com/jamilecadias/yoga-angular-project',
    weblink: '',
    image: project2Image,
  },
  {
    title: 'Collaborative storytelling Blog',
    description: 'Collaborative storytelling publishing blog made in Python and Django. Final individual project for Python course.',
    link: 'https://github.com/jamilecadias/proyecto_python',
    weblink: '',
    image: project3Image,
  },
  {
    title: 'Conexão Brasil ',
    description: 'Landing page and user self-management dashboard for a language course, with a CRUD system in Node.js, using APIs and database in Mysql. Final individual project for the full stack course.',
    link: 'https://github.com/jamilecadias/proyecto_python',
    weblink: '',
    image: project4Image,
  },
  {
    title: 'Landing page InConcert ',
    description: 'Landing page designed with Html, CSS and Javascript, applying responsive design and Bootstrap.  Technical test for selection process.',
    link: 'https://github.com/jamilecadias/landing-page',
    weblink: 'https://jamilecadias.github.io/landing-page/',
    image: project5Image,
  },
  {
    title: 'Mercado Liebre',
    description: 'E-commerce website in Node.js with register and login forms, inspired by Mercado Libre. First work done individually in the Full Stack course, with code review practice.',
    link: 'https://mercado-liebre-node-qw25.onrender.com/',
    weblink: '',
    image: project6Image,
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
                  <ProjectLink href={project.weblink} target="_blank">
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