import styled from 'styled-components'

export const ContainerMenu = styled.nav`
    ul{
        padding: 0;
        margin: 0;      
        list-style-type: none;
        display: flex;
        justify-content: end;
        align-items: center;
        li{
            margin-left: 10px;
            margin-right: 10px;
            a{
                text-decoration: none;
                color: #7D8792;
                font-size: 1.3rem;
                cursor: pointer;
                transition-duration: 1s;
                &:hover{
                    color: #FFFFFF;
                    transition-duration: 1s;
                }
            }
        }
        
    }
`;