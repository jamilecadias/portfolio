import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  SkillsContainer,
  Content,
  SkillsButton,
  CloseButton
} from './styles';

// Importing images
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
import oop from 'assets/img/opp.png';
import ejs from 'assets/img/ejs.png';

export default function Skills() {
  // Define state variables for each modal
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
    const [modalState17, changeModalStatel17] = useState(false);
    const [modalState18, changeModalStatel18] = useState(false);
  return (
    <SkillsContainer id="skills">
      <h1 className="title">Skills</h1>
      <div className='container'>

        {/* JAVASCRIPT */}
        <div className='imgContainer'>
          <img src={Javascrip} alt='Javascript' />
          <SkillsButton onClick={() => changeModalStatel1(!modalState1)}>Javascrip</SkillsButton>
          <Modal state={modalState1} changeState={changeModalStatel1}>
            <Content>
              <h2>Javascrip</h2>
              <p>I studied Javascript throughout my full stack developer course, that's where it all started. Then I applied javascript in most of my projects. Such as Coffea Shop, Conexão Brasil, and this portfolio.</p>
              <CloseButton onClick={() => changeModalStatel1(!modalState1)}>Close</CloseButton>
            </Content>
          </Modal>
        </div>

        {/* TYPESCRIPT */}
        <div className='imgContainer'>
          <img src={Typescrip} alt='Typescript' />
          <SkillsButton onClick={() => changeModalStatel2(!modalState2)}>Typescript</SkillsButton>
          <Modal state={modalState2} changeState={changeModalStatel2}>
            <Content>
              <h2>Typescrip</h2>
              <p>Because it is a superset of JavaScript, which essentially adds static types and class-based objects, this programming language has become familiar to me. I used Typescript throughout my Angular course and developed a super cool project with Angular. It is a page for managing students and yoga courses. Take a look at "Espacio Zen".</p>
              <CloseButton onClick={() => changeModalStatel2(!modalState2)}>Close</CloseButton>
            </Content>
          </Modal>
        </div>

{/* PYTHON */}
<div className='imgContainer'>
  <img src={Python} alt='Python'/>
  <SkillsButton onClick={() => changeModalStatel3(!modalState3)}>Python</SkillsButton>
  <Modal
    state={modalState3}
    changeState={changeModalStatel3}
  >
    <Content>
      <h2>Python</h2>
      <p>
        Python was the first programming language I approached when I wanted to learn how to program. I later took a course to go deeper and learn more. I was able to practice throughout the course and create my own project to present at the end. It is a collaborative storytelling website. You can find more details here.
      </p>
      <CloseButton onClick={() => changeModalStatel3(!modalState3)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* HTML */}
<div className='imgContainer'>
  <img src={Html5} alt='Html5'/>
  <SkillsButton onClick={() => changeModalStatel4(!modalState4)}>Html5</SkillsButton>
  <Modal
    state={modalState4}
    changeState={changeModalStatel4}
  >
    <Content>
      <h2>Html5</h2>
      <p>
        HyperText Markup Language is the most basic building block of the web. I am very familiar with it because I have applied it in all my projects. I started studying HTML in the full stack course and then in pretty much every other course and project I took.
      </p>
      <CloseButton onClick={() => changeModalStatel4(!modalState4)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* CSS */}
<div className='imgContainer'>
  <img src={Css} alt='Css'/>
  <SkillsButton onClick={() => changeModalStatel5(!modalState5)}>Css</SkillsButton>
  <Modal
    state={modalState5}
    changeState={changeModalStatel5}
  >
    <Content>
      <h2>Css</h2>
      <p>
        Cascading Style Sheets is also quite familiar to me since I started studying programming. I have applied CSS extensively in my projects. You can see it in Coffea Shop, Conexão Brasil, Espaço Zen, and in this portfolio.
      </p>
      <CloseButton onClick={() => changeModalStatel5(!modalState5)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* REACT */}
<div className='imgContainer'>
  <img src={React1} alt='React'/>
  <SkillsButton onClick={() => changeModalStatel6(!modalState6)}>React</SkillsButton>
  <Modal
    state={modalState6}
    changeState={changeModalStatel6}
  >
    <Content>
      <h2>React</h2>
      <p>
        Absolutely in love with this library, I discovered React in my Full Stack course. I transitioned my final e-commerce project to React with Coffea Shop, but perhaps my best example of a React project is this portfolio.
      </p>
      <CloseButton onClick={() => changeModalStatel6(!modalState6)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* ANGULAR */}
<div className='imgContainer'>
  <img src={Angular} alt='Angular'/>
  <SkillsButton onClick={() => changeModalStatel7(!modalState7)}>Angular</SkillsButton>
  <Modal
    state={modalState7}
    changeState={changeModalStatel7}
  >
    <Content>
      <h2>Angular</h2>
      <p>
        After studying React, I wanted to learn a frontend framework, so Angular was a great choice. It is a framework with infinite possibilities. I used Angular with TypeScript in my "Espacio Zen" project. Take a look!
      </p>
      <CloseButton onClick={() => changeModalStatel7(!modalState7)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* DJANGO */}
<div className='imgContainer'> 
  <img src={Django} alt='Django'/>
  <SkillsButton onClick={() => changeModalStatel8(!modalState8)}>Django</SkillsButton>
  <Modal
    state={modalState8}
    changeState={changeModalStatel8}
  >
    <Content>
      <h2>Django</h2>
      <p>
        I started to have contact with Django when I studied Python, although the course didn't go deep into this framework, I decided to study more about it on my own. I used Django to develop my project in Python, a webpage of collaborative stories. See more here.
      </p>
      <CloseButton onClick={() => changeModalStatel8(!modalState8)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* BOOTSTRAP */}
<div className='imgContainer'>
  <img src={Bootstrap} alt='Bootstrap'/>
  <SkillsButton onClick={() => changeModalStatel9(!modalState9)}>Bootstrap</SkillsButton>
  <Modal
    state={modalState9}
    changeState={changeModalStatel9}
  >
    <Content>
      <h2>Bootstrap</h2>
      <p>
        This framework really helps in creating responsive websites and applications quickly and simply. I started using it in my Python projects and with Angular in the courses I did at Coderhouse.
      </p>
      <CloseButton onClick={() => changeModalStatel9(!modalState9)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* WORDPRESS */}
<div className='imgContainer'>
  <img src={Wordpress} alt='Wordpress'/>
  <SkillsButton onClick={() => changeModalStatel10(!modalState10)}>Wordpress</SkillsButton>
  <Modal
    state={modalState10}
    changeState={changeModalStatel10}
  >
    <Content>
      <h2>Wordpress</h2>
      <p>
        Due to the great popularity of this web content management system, I decided to learn more about it by taking a course at EducationIT. The idea was to better understand how everything works with Wordpress and also to have an approach to the PHP programming language that I was interested in adding to my knowledge.
      </p>
      <CloseButton onClick={() => changeModalStatel10(!modalState10)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* NODE */}
<div className='imgContainer'>
  <img src={Node} alt='Node'/>
  <SkillsButton onClick={() => changeModalStatel11(!modalState11)}>Node</SkillsButton>
  <Modal
    state={modalState11}
    changeState={changeModalStatel11}
  >
    <Content>
      <h2>Node</h2>
      <p>
        This open-source environment that executes JavaScript code outside of a browser not only allows you to create web servers but also makes them more agile and able to work with other scripting languages such as Python. For this reason, we developers use it mostly in network applications that are looking to be fast or in large projects where processes need to be agile. Node.js was always there.
      </p>
      <CloseButton onClick={() => changeModalStatel11(!modalState11)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* MySQL */}
<div className='imgContainer'>
  <img src={Mysql} alt='Mysql'/>
  <SkillsButton onClick={() => changeModalStatel12(!modalState12)}>Mysql</SkillsButton>
  <Modal
    state={modalState12}
    changeState={changeModalStatel12}
  >
    <Content>
      <h2>Mysql</h2>
      <p>
        I used this relational database management system during the Full Stack course and in the development of the Coffea Shop project. Check it out!
      </p>
      <CloseButton onClick={() => changeModalStatel12(!modalState12)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* SEQUELIZE */}
<div className='imgContainer'>
  <img src={Sequelize} alt='Sequelize'/>
  <SkillsButton onClick={() => changeModalStatel13(!modalState13)}>Sequelize</SkillsButton>
  <Modal
    state={modalState13}
    changeState={changeModalStatel13}
  >
    <Content>
      <h2>Sequelize</h2>
      <p>
        It is an ORM for Node.js that allowed me to speed up my developments that included relational databases such as MySQL.
      </p>
      <CloseButton onClick={() => changeModalStatel13(!modalState13)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>

{/* POSTMAN */}
<div className='imgContainer'>
  <img src={Postman} alt='Postman' />
  <SkillsButton onClick={() => changeModalStatel13(!modalState14)}>
    Postman
  </SkillsButton>
  <Modal state={modalState14} changeState={changeModalStatel14}>
    <Content>
      <h2>Postman</h2>
      <p>
        I worked with the Postman API platform to design, build, test, and
        iterate my APIs in the Full Stack course and for the development of the
        final project.
      </p>
      <CloseButton onClick={() => changeModalStatel14(!modalState14)}>
        Close
      </CloseButton>
    </Content>
  </Modal>
</div>

{/* AGILE METHODOLOGY */}
<div className='imgContainer'>
  <img id="agile" src={agile} alt='Agile methodology' />
  <SkillsButton onClick={() => changeModalStatel15(!modalState15)}>
    Agile
  </SkillsButton>
  <Modal state={modalState15} changeState={changeModalStatel15}>
    <Content>
      <h2>Agile methodology</h2>
      <p>
        In the beginning of the Full Stack course, I had a complete module of
        study about agile methodology. From this moment, I could apply the
        agile methodologies throughout the course and in my professional
        experience with the development of the final project and team work.
      </p>
      <CloseButton onClick={() => changeModalStatel15(!modalState15)}>
        Close
      </CloseButton>
    </Content>
  </Modal>
</div>

{/* SOFT SKILLS */}
<div className='imgContainer'>
  <img src={SoftSkills} alt='SoftSkills' />
  <SkillsButton onClick={() => changeModalStatel16(!modalState16)}>
    Soft Skills
  </SkillsButton>
  <Modal state={modalState16} changeState={changeModalStatel16}>
    <Content>
      <h2>Soft Skills</h2>
      <p>
        In every module of the Full Stack course, there was a section dedicated
        to Soft Skills. This way, I understood their importance and applied the
        concepts in the work developed in groups for the final project.
      </p>
      <CloseButton onClick={() => changeModalStatel16(!modalState16)}>
        Close
      </CloseButton>
    </Content>
  </Modal>
</div>

{/* OOP */}
<div className='imgContainer'>
  <img src={oop} alt='oop' />
  <SkillsButton onClick={() => changeModalStatel17(!modalState17)}>
    OOP
  </SkillsButton>
  <Modal state={modalState17} changeState={changeModalStatel17}>
    <Content>
      <h2>OOP</h2>
      <p>
        Object-Oriented Programming is currently the most widely used paradigm
        for designing computer applications and programs. It has many
        advantages, mainly when you need to solve complex programming
        challenges. That is why the courses I took always emphasized the
        importance of this paradigm in programming, and I was able to apply it
        in my projects.
      </p>
      <CloseButton onClick={() => changeModalStatel17(!modalState17)}>
        Close
      </CloseButton>
    </Content>
  </Modal>
</div>

{/* EJS */}
<div className='imgContainer'>
  <img src={ejs} alt='Ejs' />
  <SkillsButton onClick={() => changeModalStatel18(!modalState18)}>EJS</SkillsButton>
  <Modal
    state={modalState18}
    changeState={changeModalStatel18}
  >
    <Content>
      <h2>EJS</h2>
      <p>
        EJS is a popular choice for web development with Node.js because it is flexible, easy to learn, and offers an efficient way to generate dynamic content for the browser. Combined with the power of JavaScript, it allows you to create dynamic, customized web pages simply and effectively. You can find an example of using EJS in my Coffea Shop project.
      </p>
      <CloseButton onClick={() => changeModalStatel18(!modalState18)}>Close</CloseButton>
    </Content>
  </Modal> 
</div>
</div>
</SkillsContainer>

)
}











