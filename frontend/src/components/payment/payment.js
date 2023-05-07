import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './payment_form'
import css from './payment.module.css';
import { useLocation } from 'react-router-dom';
import axios from "axios";


export default function Payment(props) {

  const [ clientSecret, setClientSecret ] = useState('');
  const location = useLocation()
  const payload = location.state.checkout_paylaod
  const { stripePromise } = props;

  useEffect( async () => {
      const payment_intent = await axios.post('/api/payment/create-payment-intent/', 
                                                 { 'amount': (payload.amount * 100),
                                                   'receipt_email': payload.email,

    })
      setClientSecret(payment_intent.data.payment_intent.client_secret)
  }, []);

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

  const appearance = { theme: 'night', labels: 'floating' }

  return (
    <div className={css.payment_container}>
      <div className={css.payment_cont}>
        <div className={css.summary_cont}>  
          <div className={css.summary_title}>{summary_title()}</div>
        </div>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
            <PaymentForm />
          </Elements>
        )}
      </div>
    </div>
  );
}


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