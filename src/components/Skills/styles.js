import styled from 'styled-components'

export const SkillsContainer = styled.div`
width: 85%;
margin: 0 auto;

.title{
    margin-bottom: 50px;
    color: #DFA70c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
  }
  
  img{
    width: 100px;
    height: 100px; 
    border-radius: 30%;
    margin-left: 25px;
  }

  .imgContainer{
    margin: 10px;
    justify-content: center;
  }

  /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;

    .title{
      margin-bottom: 20px;
    }
    .container{
      gap: 5px;
    }
    
    img{
      width: 50px;
      height: 50px; 
      margin-left: 15px;
    }
    
  `

 export const SkillsButton = styled.div`
    min-width: 150px;
    border: solid 1px #DFA70C;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #EEEEEE;
    background-color: transparent;
    border-radius: 42px;
    font-size: 1rem;
    padding: 10px 15px;
    margin; 0 auto;
    margin-bottom; 1rem;
    margin-top: 2rem;
    transition-duration: 1s;
    cursor: pointer;

    &:hover{
        color: #DFA70C;
        border: solid 1px #EEEEEE;
        transition-duration: 1s;
    }

    /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    min-width: 80px;
    font-size: 10px;
    padding: 7px 15px;
    margin-top: 5px;

  /* Estilos para dispositivos Tablet (768px a 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;
    
    `

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;

  } `

export const CloseButton = styled.div`
  max-width: 150px;
  width: 100%;
  border; solid 1px #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EEEEEE;
  background-color: #DFA70c;
  border-radius: 42px;
  font-size: 1rem;
  padding: 12px 15px;
  margin-bottom: 1rem;
  margin-top: 2rem;
  transition-duration: 1s;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    border: solid 1px #DFA70C;
    background-color: transparent;
    color: #DFA70c;
  }`