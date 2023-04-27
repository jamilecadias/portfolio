import React from 'react'
import { AboutContainer} from './styles'
import profile from 'assets/img/profile1.jpg';

export default function About() {
    return (
        <AboutContainer>
        <div className='container1'>
            <img src={ profile } alt='profilePic'/>
            <div>
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='button1' type="button">Download CV</button>
            <button className='button2' type="button">Projects</button>  
            </div>        
        </div>
        </AboutContainer>
    )
} 
