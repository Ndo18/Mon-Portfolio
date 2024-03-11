import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styleComponent/ContactForm.css'

export const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();

    // Vérifier si les champs requis sont remplis
    const { user_name, user_email, message } = form.current.elements;
    if (!user_name.value || !user_email.value || !message.value) {
      setError("Veuillez remplir tous les champs")
      return
    }

    emailjs
      .sendForm('service_5vdbs18', 'template_itntszg', form.current, {
        publicKey: 'PiOz-t1dVacGiZcfy',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setError(null) // Effacer les messages d'erreur précédents
          setSuccess(true) // Afficher le message de succès
          // Réinitialiser le formulaire ici si nécessaire
          form.current.reset()
          setTimeout(() => {
            setSuccess(false)
          }, 5000)
        },
        (error) => {
          console.log('FAILED...', error.text)
          setError("Une erreur s'est produite lors de l'envoi du formulaire")
        },
      )
  };

  return (
    <div id='Contact' className='formulaire'>
      <h3>Vous avez besoin de créer, éditer ou encore déboguer votre site internet ? Échangeons à ce sujet en me contactant ci-dessous !</h3>
      <form ref={form} onSubmit={sendEmail} className='contactform'>
        <label>Nom</label>
        <input type="text" name="user_name" placeholder='Votre nom'/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='Votre email'/>
        <label>Message</label>
        <textarea name="message" placeholder='Écrivez votre message'/>
        <input type="submit" value="Envoyer" className='submitbutton'/>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Votre message a bien été envoyé !</p>}
      </form>
    </div>
  );
};
