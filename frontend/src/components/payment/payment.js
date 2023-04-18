import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import css from './payment.module.css';
import { useLocation } from 'react-router-dom';

export default function StripeForm() {

  const location = useLocation()
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // console.log(location.state)

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
                                                             'item_ids': location.state.item_ids });
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
