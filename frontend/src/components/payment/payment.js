import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import css from './payment.module.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';
 

export default function Payment() {

  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation()

  const payload = location.state.checkout_paylaod
  const [errorMessage, setErrorMessage] = useState();
  // const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    // setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
      return;
    }

    // setLoading(true);

    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const payment_intent = await axios.post('/api/payment/create-payment-intent/', { 'amount': (payload.amount * 100) })
    const clientSecret = payment_intent.data.payment_intent.client_secret

    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:3000/#/payment_success',
      },
    });

    if (error) {
      handleError(error);
    }
  };

  const summary_title  = () => {
    var item_text = ''
    if (payload.item_ids.length == 1) {
      item_text = ' Item)'
    } else {
      item_text = ' Items)'
    }
    const output = ('Total: £' + payload.amount + ' (' + payload.item_ids.length + item_text)
    return output
  }

  return (
    <div className={css.payment_container}>
      <div className={css.payment_cont}>
        <div className={css.summary_cont}>  
          <div className={css.summary_title}>{summary_title()}</div>
        </div>
        <form className={css.form} onSubmit={handleSubmit}>
          <PaymentElement className={css.payment_ele} />
            {errorMessage && <p>{errorMessage}</p>}
          <button className={css.button} type="submit">Pay</button>
        </form>
       </div>
     </div>
  );
};




    // event.preventDefault();
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    // });
    // if (error) {
    //   setErrorMessage(error.message);
    // } else {
    //   const payment_method_id = paymentMethod.id;
    //   try {
    //     const data = await axios.post('/api/payment/', {     'payment_method_id': payment_method_id, 
    //                                                          'amount': payload.amount,
    //                                                          'email': payload.email,
    //                                                          'customer_id': payload.customer_id,
    //                                                          'item_ids': payload.item_ids,
    //                                                          'address_line_1': payload.address_line_1,
    //                                                          'address_line_2': payload.address_line_2,
    //                                                          'address_line_3': payload.address_line_3,
    //                                                          'area': payload.area,
    //                                                          'postcode': payload.postcode,
    //                                                          'city': payload.city,
    //                                                          'country': payload.country,
    //                                                          'phone_number': payload.phone_number });
    //     const paymentIntent = data.data.payment_intent

    //     const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
    //       payment_method: paymentIntent.paymentMethod
    //     });

