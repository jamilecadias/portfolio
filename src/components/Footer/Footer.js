import React from 'react'
import { FooterContainer, IconsContainer, NoteContainer} from './styles'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



export default function Footer() {
    return (

<FooterContainer> 
    <IconsContainer> 
            <ul className='social-list'>
                <li>
                <a href='https://www.instagram.com/jamiledev/' target='_blank'>
                    <FaInstagram/>
                    </a>
                </li>
                <li>
                <a href='https://www.linkedin.com/in/jamilecadias/' target='_blank'>
                    <FaLinkedin/>
                    </a>
                </li>
                <li>
                <a href='https://twitter.com/Jamilecadias' target='_blank'>
                    <FaTwitter/>
                    </a>
                </li>
                <li>
                <a href='https://github.com/jamilecadias'target='_blank'>
                    <FaGithub/>
                    </a>
                </li>  
                <li>
                <a href='https://www.facebook.com/milycard'target='_blank'>
                    <FaFacebook/>
                    </a>
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



