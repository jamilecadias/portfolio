import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 7rem;
  margin-top: 7rem;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container1 {
    display: flex;
  }
  
    img {
      max-width: 250px;
      border: solid 4px #ffffff;
      border-radius: 4px;
    }
  }

  h1 {
    color: #e0a80d;
  }

  p {
    color: #ededed;
    line-height: 1.5rem;
  }

  div:last-child {
    padding-left: 2.1rem;
  }

  button {
    max-width: 150px;
    width: 100%;
    border: solid 1px #eeeeee;
    justify-content: center;
    color: #eeeeee;
    background-color: #dfa70c;
    border-radius: 42px;
    font-size: 1rem;
    padding: 12px 15px;
    margin-bottom: 1rem;
    margin-top: 2rem;
    transition-duration: 1s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      border: solid 1px #dfa70c;
      background-color: transparent;
      color: #dfa70c;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    margin-bottom: 3rem;
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;

    .container1 {
      flex-direction: column;
      align-items: center;
    }

    div:last-child {
      padding-left: 0;
      margin-top: 1.5rem;
    }

    h1 {
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }
  }

  /* Estilos para dispositivos Tablet (768px a 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10px;

    .container1 {
      flex-direction: column;
      align-items: center;
    }

    div:last-child {
      padding-left: 0;
      margin-top: 1.5rem;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  /* Estilos para dispositivos Desktop (1024px em diante) */
  @media (min-width: 1024px) {
    // Estilos padrão para desktop
  }
`;
