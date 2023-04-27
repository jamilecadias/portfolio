import React from 'react'
import { ModalContainer, Overlay, CloseButtonx} from './styles'

export default function Modal ({children, state, changeState}) {
    return (
        <>
            {state &&
            <Overlay>
                <ModalContainer>
                    <CloseButtonx onClick={() => changeState(false)} >X</CloseButtonx>
                    {children}
                </ModalContainer>

            </Overlay>
            }
        </>
    )
}