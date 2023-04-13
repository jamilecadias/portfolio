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
    h2{
        color: #E0A80D;
    }
    P{
        color: #EDEDED;
        line-height: 1.5rem;
        
        
    }
    div:last-child{
        padding-left: 2.1rem;
    }


    a, button{
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

`;