import React from 'react'
import { ContactContainer} from './styles'
import { useState } from 'react';
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Complete all fields in the form.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

   emailjs.send("service_g8d0sak", "template_whewu4p", templateParams, "mUiLhrdcZSp_69KAa")
   .then((response) =>{
    console.log("Email enviado", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')

   }, (err) => {
    console.log("ERROR: ", err)
   })
  }

  return (
    <ContactContainer> 
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
      </div>
      </ContactContainer> 
  );
}

