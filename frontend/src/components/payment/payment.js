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

  let total_item_string = ''

  useEffect( async () => {
    const map_items = payload.item_ids.map((item) => {
      const item_string = ('Parent_ID: ' + item['parent_id'] + '; Category: ' + item['category'] + '; Item: ' + 
                            item['title'] + '; Colour: ' + item['colour'] + '; Size: ' + item['size'] + '; Price: ' + 
                            '£' + item['price'])
      total_item_string = total_item_string + '[' + item_string + '] '
    })
      const data_string = '{Email List: ' + payload.email_distribution_save + '} ' + total_item_string
      const payment_intent = await axios.post('/api/payment/create-payment-intent/', 
                                                 { 'amount': (payload.amount * 100),
                                                   'first_name': payload.first_name,
                                                   'last_name': payload.last_name,
                                                   'data_string': data_string,
                                                   'address_line_1': payload.address_line_1,
                                                   'address_line_2': payload.address_line_2,
                                                   'address_line_3': payload.address_line_3,
                                                   'area': payload.area,
                                                   'postcode': payload.postcode,
                                                   'city': payload.city,
                                                   'country': payload.country,
                                                   'phone_number': payload.phone_number })

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