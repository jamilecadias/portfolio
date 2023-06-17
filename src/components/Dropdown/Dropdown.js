import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {
  DropdownContainer,       // Importing styled components for the dropdown container, button, menu and menu item
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from './styles';

const Dropdown = ({
  isOpen,                   // Boolean prop indicating if the dropdown menu is currently open or not
  handleDropdownClick,      // Function prop to handle clicking on the dropdown button
  handleDropdownLeave,      // Function prop to handle when the mouse leaves the dropdown menu
  handleLanguageClick,      // Function prop to handle selecting a language from the dropdown menu
}) => {
  const languages = ['English', 'Spanish', 'Portuguese'];  // Array of available languages to display in the dropdown menu

  return (
    <DropdownContainer>  
      <DropdownButton onClick={handleDropdownClick}>  
      Download CV<FiChevronDown /> 
      </DropdownButton>
      {isOpen && (   // If the dropdown menu is open, render the menu component
        <DropdownMenu onMouseLeave={handleDropdownLeave}>  
          {languages.map((language) => (   // Loop through the available languages and render a menu item for each
            <DropdownMenuItem
              key={language}
              onClick={() => handleLanguageClick(language)}  // Call the handleLanguageClick function when a language is selected
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
  isOpen: PropTypes.bool.isRequired,                // Validate the prop types
  handleDropdownClick: PropTypes.func.isRequired,
  handleDropdownLeave: PropTypes.func.isRequired,
  handleLanguageClick: PropTypes.func.isRequired,
};

export default Dropdown;


/* import React from 'react';
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

export default Dropdown; */

