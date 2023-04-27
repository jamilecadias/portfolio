import styled from 'styled-components'

export const Overlay = styled.div`
width:  100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0, 0, 0, .5);
padding: 40px;
display: flex;
align-items: center;
justify-content: center;

`
export const ModalContainer = styled.div`
width:  500px;
min-height: 100px;
background: #fff;
position: relative;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 20px;
`
export const CloseButtonx = styled.div`
width:  30px;
height: 30px;
border: none;
background: none;
cursor:pointer;
transition: .3s ease all;
border-radius: 5px;
color: #1766DC;

&:hover {
    background: #f2f2f2;
}
`
export const Button = styled.div``
