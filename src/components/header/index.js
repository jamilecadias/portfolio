import React from 'react'
import Menu from 'components/Menu';

import { HeaderContainer,  Container} from './styles';


export default function Header() {
    return (
        <HeaderContainer>
            <Container>
                <div>
                    Logo
                </div>
                <Menu />
            </Container>
        </HeaderContainer> 
        
    )
}
