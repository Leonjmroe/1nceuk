import { useState, useRef } from "react";
import { CardElement, useStripe, useElements, PaymentElement, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import axios from "axios";
import css from './payment.module.css';
import { useLocation } from 'react-router-dom';


export default function StripeForm() {

  const location = useLocation()
  const stripe = useStripe();
  const elements = useElements();
  const iframeRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [secure3D, set_secure3D] = useState();

  // console.log(location.state.client_secret.client_secret)
  // const [clientSecret, setclientSecret] = useState();


  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
    } else {
      const payment_method_id = paymentMethod.id;

      try {
        const data = await axios.post('/api/payment/', { 'payment_method_id': payment_method_id, 
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

          const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
            payment_method: paymentIntent.paymentMethod
          });

          if (error) {
            window.alert('Payment Error')
          } else {
            window.alert('Payment Success!')
          }

      } catch (error) {
        setLoading(false);
        setErrorMessage(error.message);
      }

    }
  };


  return (
    <div className={css.payment_container}>
      <div className={css.payment_cont}>
      {/*<iframe className={css.iframe_secure} src={secure3D}></iframe>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="card-element">Card details</label>
            <CardElement id="card-element" options={{}} />
          </div>
          <button disabled={!stripe || loading}>£{location.state.amount}</button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>*/}

      <iframe
        ref={iframeRef}
        width="400"
        height="300"
        style={{ border: '1px solid black' }}
      ></iframe>


      <form onSubmit={handleSubmit}>
        <CardElement />
          {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Pay</button>
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
