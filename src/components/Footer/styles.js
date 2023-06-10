import styled from 'styled-components'

export const FooterContainer = styled.div``


export const IconsContainer = styled.div`
    .social-list{
    color: #DFA70c;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;


    }

    li{
        margin: 0 1em;
        list-style: none;
        
    }

    svg{
        font-size: 1.5em;
        cursor: pointer;
    }

    a{
        color: #DFA70c;

        &:hover{
            color: #FFFFFF;
    
        }
    }


`
export const NoteContainer = styled.div`
.footnote{
    color: #8f9aa7;
    font-size: 10pt;
    margin-top: 35px;
    margin-bottom: 50px;
    opacity: 0.6;
    display: flex;
    justify-content: center;

    /* color: #04c2c9; */

    .highlight{
        color: red;
}


`;