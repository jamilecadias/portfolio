import React, {useState} from 'react'
import Modal from 'components/Modal/Modal';
import { SkillsContainer, Content, SkillsButton, CloseButton} from './styles'
/* import { Button } from 'bootstrap'; */
import Javascrip from 'assets/img/javascript.png';
import Typescrip from 'assets/img/typescript.png';
import Python from 'assets/img/python.png';
import Html5 from 'assets/img/html5.jpg';
import Css from 'assets/img/css.jpeg';
import React1 from 'assets/img/react.jpeg';
import Angular from 'assets/img/angular.png';
import Bootstrap from 'assets/img/bootstrap.png';
import Django from 'assets/img/django.jpg';
import Wordpress from 'assets/img/wordpress.jpeg';
import Node from 'assets/img/node.webp';
import Mysql from 'assets/img/mysql.jpg';
import Sequelize from 'assets/img/sequelize.png';
import Postman from 'assets/img/postman.jpg';
import SoftSkills from 'assets/img/softskills.jpeg';
import agile from 'assets/img/agile.jpeg';





export default function Skills() {
    const [modalState1, changeModalStatel1] = useState(false);
    const [modalState2, changeModalStatel2] = useState(false);
    const [modalState3, changeModalStatel3] = useState(false);
    const [modalState4, changeModalStatel4] = useState(false);
    const [modalState5, changeModalStatel5] = useState(false);
    const [modalState6, changeModalStatel6] = useState(false);
    const [modalState7, changeModalStatel7] = useState(false);
    const [modalState8, changeModalStatel8] = useState(false);
    const [modalState9, changeModalStatel9] = useState(false);
    const [modalState10, changeModalStatel10] = useState(false);
    const [modalState11, changeModalStatel11] = useState(false);
    const [modalState12, changeModalStatel12] = useState(false);
    const [modalState13, changeModalStatel13] = useState(false);
    const [modalState14, changeModalStatel14] = useState(false);
    const [modalState15, changeModalStatel15] = useState(false);
    const [modalState16, changeModalStatel16] = useState(false);

  
    return (
        <SkillsContainer>
       <h2 className="title">Skills</h2>
       <div className='container'>
       <div className='imgContainer'>
       <img src={ Javascrip } alt='Javascript'/>
       <SkillsButton onClick={() => changeModalStatel1(!modalState1)}>Javascrip</SkillsButton>
       <Modal
        state={modalState1}
        changeState={changeModalStatel1}
        >
        <Content>
        <h2>Javascrip</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel1(!modalState1)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>


      
       <div className='imgContainer'>
       <img src={ Typescrip } alt='Typescript'/>
       <SkillsButton onClick={() => changeModalStatel2(!modalState2)}>Typescript</SkillsButton>
       <Modal
        state={modalState2}
        changeState={changeModalStatel2}
        >
        <Content>
        <h2>Typescrip</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel2(!modalState2)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



        <div className='imgContainer'>
       <img src={ Python } alt='Python'/>
       <SkillsButton onClick={() => changeModalStatel3(!modalState3)}>Python</SkillsButton>
       <Modal
        state={modalState3}
        changeState={changeModalStatel3}
        >
        <Content>
        <h2>Python</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel3(!modalState3)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Html5 } alt='Html5'/>
       <SkillsButton onClick={() => changeModalStatel4(!modalState4)}>Html5</SkillsButton>
       <Modal
        state={modalState4}
        changeState={changeModalStatel4}
        >
        <Content>
        <h2>Html5</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel4(!modalState4)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Css } alt='Css'/>
       <SkillsButton onClick={() => changeModalStatel5(!modalState5)}>Css</SkillsButton>
       <Modal
        state={modalState5}
        changeState={changeModalStatel5}
        >
        <Content>
        <h2>Css</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel5(!modalState5)}>Close</CloseButton>
        </Content>
        </Modal> 
        </div>
      


       <div className='imgContainer'>
       <img src={ React1 } alt='React'/>
       <SkillsButton onClick={() => changeModalStatel6(!modalState6)}>React</SkillsButton>
       <Modal
        state={modalState6}
        changeState={changeModalStatel6}
        >
        <Content>
        <h2>React</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel6(!modalState6)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>
      
      <div className='imgContainer'>
       <img src={ Angular } alt='Angular'/>
       <SkillsButton onClick={() => changeModalStatel7(!modalState7)}>Angular</SkillsButton>
       <Modal
        state={modalState7}
        changeState={changeModalStatel7}
        >
        <Content>
        <h2>Angular</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel7(!modalState7)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>




       <div className='imgContainer'> 
       <img src={ Django} alt='Django'/>
       <SkillsButton onClick={() => changeModalStatel8(!modalState8)}>Django</SkillsButton>
       <Modal
        state={modalState8}
        changeState={changeModalStatel8}
        >
        <Content>
        <h2>Django</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel8(!modalState8)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Bootstrap} alt='Bootstrap'/>
       <SkillsButton onClick={() => changeModalStatel9(!modalState9)}>Bootstrap</SkillsButton>
       <Modal
        state={modalState9}
        changeState={changeModalStatel9}
        >
        <Content>
        <h2>Bootstrap</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel9(!modalState9)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Wordpress} alt='Wordpress'/>
       <SkillsButton onClick={() => changeModalStatel10(!modalState10)}>Wordpress</SkillsButton>
       <Modal
        state={modalState10}
        changeState={changeModalStatel10}
        >
        <Content>
        <h2>Wordpress</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel10(!modalState10)}>Close</CloseButton>
        </Content>
      </Modal> 
      </div>



       <div className='imgContainer'>
       <img src={ Node} alt='Node'/>
       <SkillsButton onClick={() => changeModalStatel11(!modalState11)}>Node</SkillsButton>
       <Modal
        state={modalState11}
        changeState={changeModalStatel11}
        >
        <Content>
        <h2>Node</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel11(!modalState11)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Mysql} alt='Mysql'/>
       <SkillsButton onClick={() => changeModalStatel12(!modalState12)}>Mysql</SkillsButton>
       <Modal
        state={modalState12}
        changeState={changeModalStatel12}
        >
        <Content>
        <h2>Mysql</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel12(!modalState12)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Sequelize } alt='Sequelize'/>
       <SkillsButton onClick={() => changeModalStatel13(!modalState13)}>Sequelize</SkillsButton>
       <Modal
        state={modalState13}
        changeState={changeModalStatel13}
        >
        <Content>
        <h2>Sequelize</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel13(!modalState13)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ Postman } alt='Postman'/>
       <SkillsButton onClick={() => changeModalStatel13(!modalState14)}>Postman</SkillsButton>
       <Modal
        state={modalState14}
        changeState={changeModalStatel14}
        >
        <Content>
        <h2>Postman</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel14(!modalState14)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>



       <div className='imgContainer'>
       <img src={ agile } alt='Agile methodology'/>
       <SkillsButton onClick={() => changeModalStatel15(!modalState15)}>Agile methodology</SkillsButton> 
       <Modal
        state={modalState15}
        changeState={changeModalStatel15}
        >
        <Content>
        <h2>Agile methodology</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel15(!modalState15)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>


       


       <div className='imgContainer'>
       <img src={ SoftSkills} alt='SoftSkills'/>
       <SkillsButton onClick={() => changeModalStatel16(!modalState16)}>Soft Skills</SkillsButton>
       <Modal
        state={modalState16}
        changeState={changeModalStatel16}
        >
        <Content>
        <h2>Soft Skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <CloseButton onClick={() => changeModalStatel16(!modalState16)}>Close</CloseButton>
        </Content>
      </Modal> 
       </div>
       </div>     
        </SkillsContainer>
    )
} 



