import React, { useState, useEffect, useCallback } from 'react'
import { AboutContainer } from './styles'
import profile from 'assets/img/profile1.jpg';
import Dropdown from 'components/Dropdown/Dropdown';

// Define the About component
export default function About() {
  // Define state variables using the useState hook
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // controls the open/closed state of the dropdown
  const [selectedLanguage, setSelectedLanguage] = useState(''); // tracks the user's selected language
  const [pdfUrl, setPdfUrl] = useState(''); // URL of the selected language's PDF file

  // Use the useEffect hook to update pdfUrl when the selectedLanguage state changes
  useEffect(() => {
    switch (selectedLanguage) {
      case 'English':
        setPdfUrl('/pdfs/english.pdf');
        break;
      case 'Spanish':
        setPdfUrl('/pdfs/spanish.pdf');
        break;
      case 'Portuguese':
        setPdfUrl('/pdfs/portuguese.pdf');
        break;
      default:
        setPdfUrl('');
        break;
    }
  }, [selectedLanguage]);

  // Define callback functions for the Dropdown component
  const handleDropdownClick = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen); // toggles the open/closed state of the dropdown
  }, [isDropdownOpen]);

  const handleLanguageClick = useCallback((language) => {
    setSelectedLanguage(language); // sets the selectedLanguage state to the clicked language
    setIsDropdownOpen(false); // closes the dropdown
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setIsDropdownOpen(false); // closes the dropdown when the user's cursor leaves it
  }, []);

  // Render the component
  return (
    <AboutContainer>
      <div className='container1'>
        <img src={ profile } alt='profilePic'/>
        <div>
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Dropdown
            isOpen={isDropdownOpen} // passes the open/closed state of the dropdown to the Dropdown component
            handleDropdownClick={handleDropdownClick} // passes the handleDropdownClick callback function to the Dropdown component
            handleDropdownLeave={handleDropdownLeave} // passes the handleDropdownLeave callback function to the Dropdown component
            handleLanguageClick={handleLanguageClick} // passes the handleLanguageClick callback function to the Dropdown component
          />
        </div>        
      </div>
      {pdfUrl && (
        <iframe style={{ display: 'none' }} src={pdfUrl} title="PDF"></iframe> // conditionally render an iframe containing the selected PDF file
      )}
    </AboutContainer>
  )
}






/* import React, { useState } from 'react'
import { AboutContainer } from './styles'
import profile from 'assets/img/profile1.jpg';

export default function About() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  function handleDropdownClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleLanguageClick(language) {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    switch (language) {
      case 'English':
        setPdfUrl('/pdfs/english.pdf');
        break;
      case 'Spanish':
        setPdfUrl('/pdfs/spanish.pdf');
        break;
      case 'Portuguese':
        setPdfUrl('/pdfs/portuguese.pdf');
        break;
      default:
        setPdfUrl('');
        break;
    }
  }

  function handleDropdownLeave() {
    setIsDropdownOpen(false);
  }

  return (
    <AboutContainer>
      <div className='container1'>
        <img src={ profile } alt='profilePic'/>
        <div>
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
          <button className='button2' type="button">Projects</button>  
        </div>        
      </div>
      {pdfUrl && (
        <iframe style={{ display: 'none' }} src={pdfUrl} title="PDF"></iframe>
      )}
    </AboutContainer>
  )
} */