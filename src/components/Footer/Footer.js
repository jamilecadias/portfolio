import React from 'react'
import { FooterContainer, IconsContainer, NoteContainer} from './styles'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



export default function Footer() {
    return (

<FooterContainer> 
    <IconsContainer> 
            <ul className='social-list'>
                <li>
                <a href='https://www.instagram.com/jamiledev/' target='_blank' rel="noreferrer">
                    <FaInstagram/>
                    </a>
                </li>
                <li>
                <a href='https://www.linkedin.com/in/jamilecadias/' target='_blank' rel="noreferrer">
                    <FaLinkedin/>
                    </a>
                </li>
                <li>
                <a href='https://twitter.com/Jamilecadias' target='_blank' rel="noreferrer">
                    <FaTwitter/>
                    </a>
                </li>
                <li>
                <a href='https://github.com/jamilecadias'target='_blank'rel="noreferrer">
                    <FaGithub/>
                    </a>
                </li>  
                <li>
                <a href='https://www.facebook.com/milycard'target='_blank' rel="noreferrer">
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



