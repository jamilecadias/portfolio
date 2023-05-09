import styled from 'styled-components'

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

    .container1{
        display:flex
    }
    div{
        padding-left: 15px;
        padding-right: 15px;

        img{
            max-width: 250px;
            border: solid 4px #ffffff;
            border-radius: 4px;
        }
    
    }
    h1{
        color: #E0A80D;
    }
    p{
        color: #EDEDED;
        line-height: 1.5rem;
        
        
    }
    div:last-child{
        padding-left: 2.1rem;
    }


     button{
        max-width: 150px;
        width: 100%;
        border; solid 1px #EEEEEE;
      /*   display: flex;
        align-items: center; */
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
    
        }
        ul {
            list-style-type: none;
          }
        }

        nav {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }



        .button1, .button2 {
            position: relative; /* permite posicionar a seta */
            background-color: #DFA70C;
            color: #EEE;
            border: solid 1px #EEEEEE;
            border-radius: 42px;
            font-size: 1rem;
            padding: 12px 15px;
            margin-bottom: 1rem;
            margin-top: 2rem;
            transition-duration: 1s;
            cursor: pointer;
            text-decoration: none;
          }
          
          button.button1:hover {
            border: solid 1px #DFA70C;
            background-color: transparent;
            color: #DFA70C;
          }
          
          button.button1 nav {
            position: absolute; /* oculta o menu fora do fluxo normal */
            top: 100%; /* posiciona o menu abaixo do botão */
            left: 0;
            width: 100%;
            padding: 0.5rem 0;
            background-color: #FFF;
            border-radius: 0 0 5px 5px; /* para arredondar a borda inferior */
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
            display: none; /* oculta o menu por padrão */
            z-index: 1; /* coloca o menu em cima de outros elementos */
          }
          
          button.button1:hover nav {
            display: block; /* exibe o menu quando o botão é hover */
          }
          
          button.button1 nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          
          button.button1 nav ul li {
            padding: 0.5rem;
          }
          
          button.button1 nav ul li:hover {
            background-color: #EEE;
          }
          
          button.button1:after {
            content: "";
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 5px solid #EEE;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
          }



`;