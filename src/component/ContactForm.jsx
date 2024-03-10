import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styleComponent/ContactForm.css'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5vdbs18', 'template_itntszg', form.current, {
        publicKey: 'PiOz-t1dVacGiZcfy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='Contact' className='formulaire'>
      <form ref={form} onSubmit={sendEmail} className='contactform'>
        <label>Nom</label>
        <input type="text" name="user_name" placeholder='Votre nom'/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='Votre email'/>
        <label>Message</label>
        <textarea name="message" placeholder='Écrivez votre message'/>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};
