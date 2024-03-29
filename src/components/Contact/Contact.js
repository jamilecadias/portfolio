import React from 'react'
import { ContactContainer} from './styles'
import { useState } from 'react';
import emailjs from '@emailjs/browser' //importing the outgoing mail library

export default function Contact() {
  // useState hook to define state variables
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault(); // preventing the default behavior of the form when clicking send

    // Check if any of the fields are empty
    if(name === '' || email === '' || message === ''){
      alert("Complete all fields in the form.");
      return;
    }

    // Define parameters for email service
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    // Send email using emailjs service
    emailjs.send("service_g8d0sak", "template_whewu4p", templateParams, "mUiLhrdcZSp_69KAa")
    .then((response) =>{
      console.log("Email enviado", response.status, response.text)
      alert("Successfully sent message!"); // Alert message when email is sent
      // clearing the form fields after sending the email
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {
      console.log("ERROR: ", err)
    })
  }

  return (
    <ContactContainer id="contact"> 
      <div className="container">
        <h1 className="title">Contact</h1>

        {/* Form to collect user input */}
        <form className="form" onSubmit={sendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className="input"
            type="text"
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className="textarea"
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </ContactContainer> 
  );
}
