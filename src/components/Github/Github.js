import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ContentGithub, GithubContainer, Itens, Foto, ListProjects, ButtonDefault} from './styles';

export default function Github() {

  const [userGit, setUserGit] = useState([])
  const [projects, setProjects] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    getApigit()
    getApiRepos()

}, [])
function getApigit(){
  axios.get('https://api.github.com/users/jamilecadias', {
   
  })
  .then(function (response) {
    setUserGit(response.data)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
    setErrorMsg("GitHub temporariamente fora de serviço!")
  });
}

function getApiRepos(){
  axios.get('https://api.github.com/users/jamilecadias/repos', {
   
  })
  .then(function (response) {
    console.log(response);
    setProjects(response.data)
  })
  .catch(function (error) {
    console.log(error);
    setErrorMsg("GitHub temporariamente fora de serviço!")
  });
}
  return (
  <GithubContainer id="github">
    <ContentGithub>
        <h1>Github</h1>
        <Itens>
            <Foto>
                <img src={userGit.avatar_url} alt='Foto Github'/>
                <h3>{userGit.name}</h3>
                <h4>{userGit.login}</h4>
                <p>{userGit.bio}</p>
            </Foto>
            <ListProjects>
              {
                projects.slice(0, 4).map((project) =>
                <div key={project.id} >
                 <a href={project.html_url} terget='_blank' rel='noreferrer'>
                  <h3>{project.name}</h3>
                </a>
                <p>{project.description}</p>
                </div>
                )
              }
            </ListProjects>
            <p>{errorMsg}</p>
        </Itens>
        <ButtonDefault>
        <a href= 'https://github.com/jamilecadias' terget='_blank' rel='noreferrer'
      >See all</a>
        </ButtonDefault>
    </ContentGithub>

  </GithubContainer>
  )
}

