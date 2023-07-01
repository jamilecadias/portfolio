import styled from 'styled-components';

export const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 65px;

  /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    margin-bottom: 0;

`;

export const LikesTitle = styled.h2`
  font-size: 2rem;
  color: #e0a80d;
  margin-bottom: 20px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const IconLabel = styled.span`
  font-size: 1rem;
  margin-top: 5px;
  text-align: center;
  white-space: nowrap;
  color: #121212;

  :hover {
    color: #e0a80d; /* Defina a cor que desejar para destacar o nome */
  }
`;

export const CustomIcon = styled.span`
  color: #ededed;
`;
