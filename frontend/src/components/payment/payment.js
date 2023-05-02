import { useState } from "react";
import { CardElement, useStripe, useElements, PaymentElement, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import axios from "axios";
import css from './payment.module.css';
// import PaymentForm from './payment_form.js';
import { useLocation } from 'react-router-dom';


export default function StripeForm() {

  const location = useLocation()
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [secure3D, set_secure3D] = useState('www.facebook.com');

  // console.log(location.state.client_secret.client_secret)
  // const [clientSecret, setclientSecret] = useState();


  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(12)
    // set_secure3D('http://www.twitter.com')

    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });


    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
    } else {
      const payment_method_id = paymentMethod.id;

      try {
        const data = await axios.post("/api/payment/", { 'payment_method_id': payment_method_id, 
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
        
          const paymentIntent = data.data.payment_intent
          console.log(paymentIntent)

          if(paymentIntent.status == 'requires_action') {
            set_secure3D(paymentIntent.next_action.use_stripe_sdk.three_ds_method_url)
            console.log('requires_action')
          }else {
            console.log(data.data.status)
          }


          // const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          //   payment_method: {
          //     card: paymentMethod,
          //     billing_details: {
          //       name: location.state.customer_id
          //     }
          //   }
          // });

          // if (error) {
          //   console.log(1, error)
          // } else if (paymentIntent.status === 'succeeded') {
          //   console.log('success!')
          // } else if (paymentIntent.status === 'requires_action' &&
          //   paymentIntent.next_action.type === 'use_stripe_sdk') {
          //   // Use Stripe SDK to handle the card action
          //   const { error: errorAction, paymentIntent: paymentIntentAction } =
          //     await stripe.handleCardAction(paymentIntent.client_secret);
          //   if (errorAction) {
          //     console.log(errorAction)
          //   } else if (paymentIntentAction.status === 'succeeded') {
          //     console.log('success!')
          //   } else {
          //     console.log('failed')
          //   }
          // } else {
          //   console.log('failed')
          // }




      } catch (error) {
        setLoading(false);
        setErrorMessage(error.message);
      }

    }
  };


  return (
    <div className={css.payment_container}>
      <div className={css.payment_cont}>
      <iframe className={css.iframe_secure} src={secure3D}></iframe>
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


// return (
//   <PaymentForm />
// )}

// return (
//   <div className={css.payment_container}>
//   <div className={css.payment_cont}>
//     <form className={css.payment_form} onSubmit={handleSubmit}>
//       {clientSecret && (
//        <LinkAuthenticationElement
//         className={css.link_authentication_element}
//         onChange={(e) => setEmail(e.target.value)}
//       />)}
//       {clientSecret && (
//       <PaymentElement className={css.payment_element} /> )}
//       <button disabled={isLoading || !stripe || !elements} className={css.submit}>
//         <span className={css.button_text}>
//           {isLoading ? <div className={css.spinner}></div> : "Pay now"}
//         </span>
//       </button>

//       {message && <div className={css.payment_message}>{message}</div>} 
//     </form>
//     </div>
//   </div> 
// );
// }
