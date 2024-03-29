import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 130px;

  /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 50px;

  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
`;

export const ProjectsHeader = styled.div`
  h1 {
    font-size: 2rem;
    color: #e0a80d;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;  

  /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    padding: 0 25px;
   
  }
`;

export const ProjectCard = styled.div`
  max-width: 400px;
  min-width: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: rgba(238, 238, 238, 0.9);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectDetails = styled.div`
  padding: 20px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  margin-top: 1rem;
`;

export const ProjectLink = styled.a`
  flex: 1;
  border: solid 1px #eeeeee;
  display: inline-block;
  align-items: center;
  justify-content: center;
  color: #eeeeee;
  background-color: #dfa70c;
  border-radius: 42px;
  font-size: 1rem;
  padding: 8px 15px;
  margin-right: 1rem;
  margin-bottom: 0;
  transition-duration: 1s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: solid 1px #dfa70c;
    background-color: transparent;
    color: #dfa70c;
  }
`;