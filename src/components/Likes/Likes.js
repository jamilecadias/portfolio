import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  FaPlane,
  FaBook,
  FaGlobe,
  FaBookOpen,
  FaBiking,
  FaUtensils,
  FaTree,
  FaTrophy,
  FaMugHot
} from 'react-icons/fa';
import {
  LikesContainer,
  LikesTitle,
  IconsContainer,
  IconWrapper,
  IconLabel,
  CustomIcon
} from './styles';

const Likes = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <LikesContainer>
      <LikesTitle>Likes</LikesTitle>
      <IconsContainer>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Travel')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaPlane />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Travel' && <IconLabel>Travel</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Studies')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaBook />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Studies' && <IconLabel>Studies</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Languages')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaGlobe />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Languages' && <IconLabel>Languages</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Reading')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaBookOpen />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Reading' && <IconLabel>Reading</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Sports')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaBiking />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Sports' && <IconLabel>Sports</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Cooking')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaUtensils />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Cooking' && <IconLabel>Cooking</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Nature')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaTree />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Nature' && <IconLabel>Nature</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Challenges')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaTrophy />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Challenges' && <IconLabel>Challenges</IconLabel>}
        </IconWrapper>
        <IconWrapper
          onMouseEnter={() => handleIconHover('Coffee')}
          onMouseLeave={handleIconLeave}
        >
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaMugHot />
            </CustomIcon>
          </IconContext.Provider>
          {hoveredIcon === 'Coffee' && <IconLabel>Coffee</IconLabel>}
        </IconWrapper>
      </IconsContainer>
    </LikesContainer>
  );
};

export default Likes;