import React from 'react'
import { FooterContainer, IconsContainer, NoteContainer} from './styles'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



export default function Footer() {
    return (

<FooterContainer> 
    <IconsContainer> 
            <ul className='social-list'>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaTwitter/>
                </li>
                <li>
                    <FaGithub/>
                </li>                           
            </ul>
    </IconsContainer> 
    <NoteContainer> 
          <div className="footnote">
            JAMILECADIAS <span className="highlight">©2023</span>
          </div>
    </NoteContainer> 
</FooterContainer> 

    )
}



