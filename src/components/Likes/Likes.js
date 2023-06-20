import React from 'react';
import { IconContext } from 'react-icons';
import { FaPlane, FaBook, FaGlobe, FaBookOpen, FaBiking, FaUtensils, FaTree, FaTrophy, FaMugHot } from 'react-icons/fa';
import { LikesContainer, LikesTitle, IconsContainer, IconWrapper, IconLabel, CustomIcon } from './styles';

const Likes = () => {
  return (
    <LikesContainer id="likes">
      <LikesTitle>Likes</LikesTitle>
      <IconsContainer>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaPlane />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Travel</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaBook />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Studies</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaGlobe />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Languages</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaBookOpen />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Reading</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaBiking />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Sports</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaUtensils />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Cooking</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaTree />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Nature</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaTrophy />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Challenges</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconContext.Provider value={{ size: '40px' }}>
            <CustomIcon>
              <FaMugHot />
            </CustomIcon>
          </IconContext.Provider>
          <IconLabel>Coffee</IconLabel>
        </IconWrapper>
      </IconsContainer>
    </LikesContainer>
  );
};

export default Likes;

