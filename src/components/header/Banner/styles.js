import styled from 'styled-components'
import imgBanner from 'assets/img/banner.jpeg'

export const BannerContainer = styled.header`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgBanner});
    background-size: cover;
    text-align: center;
    position: relative;
    
    &:after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(46,46,46,0.8);
    }
    div{
        z-index: 10;

    }

    h2{
        text-transform: uppercase;
        font-size: 1.2rem;
        color: #EEEEEE;
        margin; 0;
        margin-bottom; 1rem;

    }

    h1{
        text-transform: uppercase;
        font-size: 2.8rem;
        color: #DFA70C;
        margin: 0;
        margin-bottom; 1rem;

    }

    p{
        font-size: 1rem;
        color: #EEEEEE;
        margin: 0;
        margin-bottom; 1rem;
    }
 
    button{
        min-width: 150px;
        border: solid 1px #DFA70C;
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
    }

    @media (max-width: 767px) {
        /* Estilos para dispositivos móveis */
       h1{
        font-size: 1.8rem;
       }
      }

 
`;
