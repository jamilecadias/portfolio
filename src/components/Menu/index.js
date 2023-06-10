import React from 'react'
import { ContainerMenu } from './styles'

export default function Menu() {
    return (
        <ContainerMenu>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a  href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#languages">Lenguages</a></li>
                <li><a href="#contact">Contato</a></li>                        
            </ul>
        </ContainerMenu>
    )
}