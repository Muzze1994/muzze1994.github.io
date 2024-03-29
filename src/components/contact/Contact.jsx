import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kpje9ad', 'template_md39qdq', form.current, '_RWJdYWsDE5BaUZnH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Fråga?</h5>
      <h2>Kontakta mig</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rasmusnyberglind@hotmail.com</h5>
            <a href="mailto:rasmusnyberglind@hotmail.com" target="_blank" rel="noreferrer">Skicka ett meddelande</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rasmus</h5>
            <a href="https://m.me/rasmus.lind.18/" target="_blank" rel="noreferrer">Skicka ett meddelande</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Namn' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Meddelande..' required></textarea>
          <button type='submit' className='btn btn-primary'>Skicka meddelande</button>
        </form>
      </div>
    </section>
  )
}

export default Contact