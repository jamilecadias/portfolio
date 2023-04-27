import styled from 'styled-components'

export const ContactContainer = styled.div`
.container{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #121212;
    color: #FFF;
    padding: 14px;
  }
  
  .title{
    margin-bottom: 14px;
    color: #DFA70c;
  }
  
  .form{
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .input{
    margin-bottom: 14px;
    height: 34px;
    border-radius: 10px;
    border: 0;
    padding: 0 8px;
  }
  
  .textarea{
    margin-bottom: 14px;
    border-radius: 4px;
    border: 0;
    padding: 8px;
    height: 94px;
    resize: none;
    
  }
  
  .button{
    height: 34px;
    border; solid 1px #EEEEEE;
    border-radius: 10px;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    color: #EEEEEE;
    background-color: #DFA70c;
    font-size: 1rem;
    transition: background-color, transform 0.8s;
    transition-duration: 1s;
  }
  
  .button:hover{
    border: solid 1px #DFA70C;
    background-color: transparent;
    color: #DFA70c;
  }
  `