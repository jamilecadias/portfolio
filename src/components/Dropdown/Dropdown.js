import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from './styles';

const Dropdown = ({
  isOpen,
  handleDropdownClick,
  handleDropdownLeave,
  handleLanguageClick,
}) => {
  const languages = ['English', 'Spanish', 'Portuguese'];

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleDropdownClick}>
        {isOpen ? 'Close' : 'Download CV'}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu onMouseLeave={handleDropdownLeave}>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
       <button className='button2' type="button">Projects</button>  
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  handleDropdownLeave: PropTypes.func.isRequired,
  handleLanguageClick: PropTypes.func.isRequired,
};

export default Dropdown;

/* import React from 'react';
import PropTypes from 'prop-types';
import { DropdownContainer } from './styles'

export default function About() {

  return (
  
  <DropdownContainer>
  <button className='button1' type="button" onClick={handleDropdownClick} onMouseLeave={handleDropdownLeave}>
Download CV
{isDropdownOpen && (
  <nav>
    <ul>
      <li>
        <a download="english.pdf" href="https://drive.google.com/file/d/1TkyKcpoVTMN4nQafrDEZ_hRbFFsnP76n/view?usp=share_link" onClick={() => handleLanguageClick('English')}>English</a>
      </li>
      <li>
        <a download="spanish.pdf" href="https://drive.google.com/file/d/1_RPR2SfIJjGugMwtRfqf-FLyF_mX0kx6/view?usp=share_link" onClick={() => handleLanguageClick('Spanish')}>Spanish</a>
      </li>
      <li>
        <a download="portuguese.pdf" href="https://drive.google.com/file/d/195ejUxf4rkOsb68Z-vthNUkLSic34rqu/view?usp=share_link" onClick={() => handleLanguageClick('Portuguese')}>Portuguese</a>
      </li>
    </ul> 
  </nav>
)}
</button>
</DropdownContainer>
)
}



 */