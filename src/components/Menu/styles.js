import styled from 'styled-components';

export const ContainerMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin-left: 10px;
      margin-right: 10px;

      a {
        text-decoration: none;
        color: #7d8792;
        font-size: 1.3rem;
        cursor: pointer;
        transition-duration: 1s;

        &:hover {
          color: #ffffff;
          transition-duration: 1s;
        }
      }
    }
  }

  /* Estilos para dispositivos Mobile (375px a 767px) */
  @media (min-width: 375px) and (max-width: 767px) {
    ul {
        flex-wrap: wrap;
      justify-content: center;

      li {
        margin: 5px;
      }

      a {
        font-size: 5px; /* Ajuste o tamanho da fonte desejado */
      }
    }
  }

  /* Estilos para dispositivos Tablet (768px a 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    ul {
      justify-content: center;

      li {
        margin: 10px;
      }
    }
  }

  /* Estilos para dispositivos Desktop (1024px em diante) */
  @media (min-width: 1024px) {
    ul {
      justify-content: flex-end;

      li {
        margin: 10px;
      }
    }
  }
`;