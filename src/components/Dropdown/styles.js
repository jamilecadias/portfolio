import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;

  @media (max-width: 767px) {
    /* Estilos para dispositivos móveis */
    display: flex;
    justify-content: center;
    align-items: center; 
   
  }
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;

  DropdownButton::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;

    display: flex;
    align-items: center; /* Alinha o ícone verticalmente no centro do botão */

    svg {
      margin-left: 5px;
      vertical-align: middle;
    }
    @media (max-width: 767px) {
      /* Estilos para dispositivos móveis */
     
     
    }
  
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin-left: 57px;
  margin-top: -15px;
  list-style: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media (max-width: 767px) {
    /* Estilos para dispositivos móveis */
    margin-left: 20px;
  }
`;

export const DropdownMenuItem = styled.li`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;