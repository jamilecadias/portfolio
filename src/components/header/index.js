import React from 'react'
import { HeaderContainer,  Container} from './styles';
import Menu from 'components/Menu';
import Banner from './Banner';
import logo from 'assets/img/logo.png';

export default function Header() {
    return (
        <>
        <HeaderContainer>
            <Container>
                <div>
                <img src={ logo } alt='Logo'width="100" height="80"/>
                </div>
                    <Menu/>
            </Container>
        </HeaderContainer>
        <Banner/> 
        </> 
    )
}
