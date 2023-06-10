import css from './contact.module.css';
import { useState } from 'react';
import axios from "axios";


export default function Contact() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const button_select = () => {
    setText('')
    setEmail('')
    send_message(email, text)
  }

  const send_message = async (email, text) => {
    try {
      const response = await axios.post('/api/mail/send_email/', {
        subject: 'You have a new customer message!',
        recipient: '1nceuk.clothing@gmail.com',
        message: `Customer Email: ${email}; Message: ${text}`
      });
      if (response.status === 200) {
        setErrorMessage('Message sent successfully')
        timeout()
      } else {
        setErrorMessage('Failed to send message')
        timeout()
      }
    } catch (error) {
      setErrorMessage('Failed to send message')
      timeout()
    }
  };

   const timeout = () => {
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    };


  return (
    <div className={css.contact_container}>
      <div className={css.contact_cont}>
        <div className={css.contact_title}>Contact Us</div>
        <div className={css.contact_content_cont}>
          <input className={css.email} type="text" placeholder="Your Email:" value={email} onChange={handleEmailChange} />
          <textarea className={css.text_area} value={text} placeholder="Your Message:" onChange={handleTextChange} />
          <div className={css.send_button} onClick={button_select}>Send Message</div>
          <div className={css.message_response}>{errorMessage}</div>
        </div>
      </div>
    </div>
  );
}

