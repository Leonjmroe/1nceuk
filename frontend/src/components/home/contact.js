import css from './home.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import InstagramFeed from './instagram.js';



export default function Contact() {

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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


    const toYoutube = () => {
      window.location.href = 'https://www.youtube.com/@1nceuk';
    }

    const toInstagram = () => {
      window.location.href = 'https://www.instagram.com/1nceuk/';
    }


  return (
    <div className={css.contact_container}>
      <div className={css.contact_cont}>

          {/*  <div className={css.social_media_cont}>
              <div className={css.item_cont}>
                <div className={css.insta_img} onClick={toInstagram}/>
                <div className={css.iconTxt}>Instagram</div>
                <InstagramFeed accessToken="25876ad79b3c0d00c8d5e697b58f1ebf" />
              </div>
      
              <div className={css.item_cont}>
                <div className={css.youtube_img} onClick={toYoutube}/>
                <div className={css.iconTxt}>YouTube</div>
              </div>
            </div>*/}

            <div className={css.contact_title}>Get in touch</div>

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

