// import { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements, PaymentElement, LinkAuthenticationElement } from "@stripe/react-stripe-js";
// import axios from "axios";
// import css from './payment.module.css';
// import { useLocation } from 'react-router-dom';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


// export default function Payment() {

//   const location = useLocation()
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState(null);
//   // const [clientSecret, setClientSecret] = useState(null);


//   useEffect( async () => {
//     // const payload = location.state.payment_payload
//     // setClientSecret(location.state.client_secret)
//     // console.log(payload, location.state.client_secret)
//     // const payment_intent = await axios.post('/api/payment/create-payment-intent/', { 'amount': 101 })
//     // setClientSecret(payment_intent.data.payment_intent.client_secret)
//   }, []);




//   const handleSubmit = async (event) => {

//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     const payment_intent = await axios.post('/api/payment/create-payment-intent/', { 'amount': 101 })
//     const clientSecret = payment_intent.data.payment_intent.client_secret

//     // event.preventDefault();
//     // const { error, paymentMethod } = await stripe.createPaymentMethod({
//     //   type: 'card',
//     //   card: elements.getElement(CardElement),
//     // });
//     // if (error) {
//     //   setErrorMessage(error.message);
//     // } else {
//     //   const payment_method_id = paymentMethod.id;
//     //   try {
//     //     const data = await axios.post('/api/payment/', {     'payment_method_id': payment_method_id, 
//     //                                                          'amount': payload.amount,
//     //                                                          'email': payload.email,
//     //                                                          'customer_id': payload.customer_id,
//     //                                                          'item_ids': payload.item_ids,
//     //                                                          'address_line_1': payload.address_line_1,
//     //                                                          'address_line_2': payload.address_line_2,
//     //                                                          'address_line_3': payload.address_line_3,
//     //                                                          'area': payload.area,
//     //                                                          'postcode': payload.postcode,
//     //                                                          'city': payload.city,
//     //                                                          'country': payload.country,
//     //                                                          'phone_number': payload.phone_number });
//     //     const paymentIntent = data.data.payment_intent

//         // const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
//         //   payment_method: paymentIntent.paymentMethod
//         // });

//     stripe.confirmPayment({
//   clientSecret,
//   elements,
//   confirmParams: {
//     // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
//     return_url: 'https://example.com',
//   },
// })
// .then(function(result) {
//   if (result.error) {
//     // Inform the customer that there was an error.
//   }
// });


//         // const result = await stripe.confirmPayment({clientSecret}, {
//         //   // payment_method_options: {
//         //   //   card: {
//         //   //     request_three_d_secure: 'any',
//         //   //   },
//         //   // },
//         //   redirect: 'if_required'
//         // });

//         // console.log(result)


//     //   } catch (error) {
//     //     setErrorMessage(error.message);
//     //   }
//     // }
//   };



import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import css from './payment.module.css';
import axios from "axios";
 

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const payment_intent = await axios.post('/api/payment/create-payment-intent/', { 'amount': 101 })
    const clientSecret = payment_intent.data.payment_intent.client_secret

    // Confirm the PaymentIntent using the details collected by the Payment Element
    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://www.1nceuk.com/payment',
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <div className={css.payment_container}>
      <div className={css.payment_cont}>
        <form className={css.form} onSubmit={handleSubmit}>
          <PaymentElement />
            {errorMessage && <p>{errorMessage}</p>}
          <button className={css.button} type="submit">Pay</button>
        </form>
       </div>
     </div>
  );
};
