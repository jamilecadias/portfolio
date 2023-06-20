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
        setPdfUrl('/pdf/Jamile_Cardoso_Dias_EN_CV.pdf');
        break;
      case 'Spanish':
        setPdfUrl('/pdf/Jamile_Cardoso_Dias_SP_CV.pdf');
        break;
      case 'Portuguese':
        setPdfUrl('/pdf/Jamile_Cardoso_Dias_PT_CV.pdf');
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
    <AboutContainer id="about">
      <div className='container1'>
        <img src={ profile } alt='profilePic'/>
        <div>
          <h1>About me</h1>
          <p>Hi, nice to meet you! 
I'm a Software Engineering student and Full Stack Web Developer. I have been learning more and more about this area and developing projects to reinforce the knowledge I have acquired. Before discovering my passion for programming, I majored in literature and did a master's in educational processes mediated by technologies. I am always learning new skills and I love new challenges. I am always praised for being creative, dedicated, and disciplined.</p>
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
