import css from './checkout.module.css';
import Countries from './countries.js';
import { useContext, useEffect, useState } from "react";
import { StateContext } from '../state_management/context.js'
import ItemTile from './../store/itemTile.js';
import { useLocation } from 'react-router-dom';


export default function Preview() {

  const location = useLocation()
  const [state, dispatch] = useContext(StateContext)
  const [items, set_items] = useState([])
  const [payment, set_payment] = useState()
  const [address_input, set_address_input] = useState()
  const [options, set_options] = useState([])
  const [suggestions_display, set_suggestions_display] = useState(css.suggestion_cont)

  const getData = key => {
    return JSON.parse(window.localStorage.getItem(key));
  };

  useEffect(() => {
    const item_data = getData('basket');
    if( item_data != null ) {
      dispatch({ type: 'set_basket', payload: item_data })
      set_items(item_data)
      set_payment(location.state.payment)
    }
  }, []);

  const addressInput = event => { 
    set_address_input(event.target.value)
  }
  
  const addressAPI = event => { 
    set_suggestions_display(css.suggestion_cont_display)
    var requestOptions = {
      method: 'GET',
    };
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${address_input}&apiKey=bf1de4840f1e4e868aed2942d329321b`, requestOptions)
      .then(response => response.json())
      .then(result => set_options(result.features))
      .catch(error => console.log('error', error));
  }

  const summary_title  = () => {
    const output = ('Total: ' + payment + ' (' + items.length + ' Items)')
    return output
  }

  const createOptions = options.map((item) => ( 
      <option className={css.options} onClick={suggestionsClose} key={options.indexOf(item)} data-addressline1={item.properties.address_line1} 
              data-addressline2={item.properties.address_line2} data-county={item.properties.county} 
              data-country={item.properties.country}>{item.properties.address_line1 + ', ' 
                            + item.properties.address_line2 + ', '
                            + item.properties.county + ', ' + item.properties.country}</option>
      )
   );

  const suggestionsClose = () => {
    // set_suggestions_display(css.suggestion_cont)
  }

  const suggestionsPopulate = () => {
    // set_suggestions_display(css.suggestion_cont)
    console.log(12)
  }
   

  return (
    <div className={css.checkout_container}>
      <div className={css.checkout_cont}>
        <div className={css.checkout_title}>Checkout</div>
        <div className={css.checkout_preview_cont}>
          <div className={css.summary_cont}>  
            <div className={css.summary_title}>{summary_title()}</div>
            </div>
          <div className={css.details_cont}>
            <input className={css.first_name} type="text" placeholder="First Name"></input>
            <input className={css.last_name} type="text" placeholder="Last Name"></input>
            <input className={css.email} type="text" placeholder="Email"></input>
            <input className={css.phone_number} type="text" placeholder="Phone Number"></input>
          </div>
          <div className={css.address_cont}>
            <div className={css.address_line_1_cont}>
              <input className={css.address_line_1} onChange={addressInput} type="text" placeholder="Address Line 1"></input>
              <div className={css.address_lookup} onClick={addressAPI} type="text" placeholder="Lookup">Lookup</div>
            </div>
            <select className={suggestions_display}>{createOptions}</select>
            <input className={css.address_line_2} type="text" placeholder="Address Line 2"></input>
            <input className={css.address_line_3} type="text" placeholder="Address Line 3"></input>
            <input className={css.address_city} type="text" placeholder="City/Locality"></input>
            <input className={css.address_area} type="text" placeholder="State/Province"></input>
            <input className={css.address_postcode} type="text" placeholder="Postal Code"></input>
            <Countries />
          </div>
          <div className={css.payment_button}>Payment</div>
        </div>
      </div>
    </div>
  ); 
}

