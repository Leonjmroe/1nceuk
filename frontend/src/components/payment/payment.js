import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import css from './payment.module.css';
import { useLocation } from 'react-router-dom';

export default function StripeForm() {

  const location = useLocation()
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
    } else {
      const { card_details } = paymentMethod;
      try {
        const { data } = await axios.post("/api/payment/", { 'card_details': card_details, 
                                                             'amount': (location.state.amount * 100),
                                                             'email': location.state.email,
                                                             'customer_id': location.state.customer_id,
                                                             'item_ids': location.state.item_ids,
                                                             'address_line_1': location.state.address_line_1,
                                                             'address_line_2': location.state.address_line_2,
                                                             'address_line_3': location.state.address_line_3,
                                                             'area': location.state.area,
                                                             'postcode': location.state.postcode,
                                                             'city': location.state.city,
                                                             'country': location.state.country,
                                                             'phone_number': location.state.phone_number });
        console.log(data);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className={css.payment_container}>
      <div className={css.payment_cont}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="card-element">Card details</label>
            <CardElement id="card-element" options={{}} />
          </div>
          <button disabled={!stripe || loading}>£{location.state.amount}</button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};




// import React, { useEffect, useState } from "react";
// import {
//   PaymentElement,
//   LinkAuthenticationElement,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js";

// export default function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }

//     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
//       switch (paymentIntent.status) {
//         case "succeeded":
//           setMessage("Payment succeeded!");
//           break;
//         case "processing":
//           setMessage("Your payment is processing.");
//           break;
//         case "requires_payment_method":
//           setMessage("Your payment was not successful, please try again.");
//           break;
//         default:
//           setMessage("Something went wrong.");
//           break;
//       }
//     });
//   }, [stripe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     setIsLoading(true);

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         // Make sure to change this to your payment completion page
//         return_url: "http://localhost:3000",
//       },
//     });

//     // This point will only be reached if there is an immediate error when
//     // confirming the payment. Otherwise, your customer will be redirected to
//     // your `return_url`. For some payment methods like iDEAL, your customer will
//     // be redirected to an intermediate site first to authorize the payment, then
//     // redirected to the `return_url`.
//     if (error.type === "card_error" || error.type === "validation_error") {
//       setMessage(error.message);
//     } else {
//       setMessage("An unexpected error occurred.");
//     }

//     setIsLoading(false);
//   };

//   const paymentElementOptions = {
//     layout: "tabs"
//   }

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <LinkAuthenticationElement
//         id="link-authentication-element"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <PaymentElement id="payment-element" options={paymentElementOptions} />
//       <button disabled={isLoading || !stripe || !elements} id="submit">
//         <span id="button-text">
//           {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
//         </span>
//       </button>
//       {/* Show any error or success messages */}
//       {message && <div id="payment-message">{message}</div>}
//     </form>
//   );
// }
