import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement, LinkAuthenticationElement} from '@stripe/react-stripe-js';
import css from './payment.module.css';
 

export default function PaymentForm() {

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');


  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
      return;
    }

    setLoading(true);

    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/#/payment_success',
        // return_url: 'https://www.1nceuk.com/#/payment_success',      # Produciton code 
      },
      receipt_email: email
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setLoading(false)
  };


  return (
    <form className={css.payment_form} onSubmit={handleSubmit}>
      <LinkAuthenticationElement className={css.link_payment_element} onChange={ (event) => { setEmail(event.value.email) }} />
      <PaymentElement className={css.payment_element} />
      <button disabled={ loading || !stripe || !elements } className={css.button}>
        <span className={css.button_text}>
          { loading ? <div className={css.spinner} ></div> : "Pay now" }
        </span>
      </button>
        { message && <div className={css.payment_message}>{ message }</div> }
    </form>
  );
};
