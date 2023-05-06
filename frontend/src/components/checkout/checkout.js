import css from './checkout.module.css';
import Countries from './countries.js';
import { useContext, useEffect, useState } from "react";
import { StateContext } from '../state_management/context.js'
import ItemTile from './../store/itemTile.js';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from '../payment/payment.js';


export default function Checkout() {

  const navigate = useNavigate()
  const location = useLocation()
  const [state, dispatch] = useContext(StateContext)

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [items, set_items] = useState([])
  const [payment, set_payment] = useState()
  const [address_input, set_address_input] = useState()
  const [options, set_options] = useState([])
  const [suggestions_display, set_suggestions_display] = useState(css.suggestion_cont)

  const [first_name, set_first_name] = useState(css.first_name)
  const [last_name, set_last_name] = useState(css.last_name)
  const [email, set_email] = useState(css.email)
  const [address_line_1, set_address_line_1] = useState(css.address_line_1)
  const [city, set_city] = useState(css.city)
  const [postcode, set_postcode] = useState(css.postcode)
  const [country, set_country] = useState(css.country)


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
      <option className={css.options} key={options.indexOf(item)} data-addressline1={item.properties.address_line1} 
              data-addressline2={item.properties.address_line2} data-county={item.properties.county} 
              data-country={item.properties.country}>{item.properties.address_line1 + '; ' 
                            + item.properties.address_line2 + '; '
                            + item.properties.county}</option>
      )
   );

  const optionSelect = (event) => {
    const output = event.target.value.split(';')
    document.getElementsByClassName(css.address_line_1)[0].value = output[0]
    document.getElementsByClassName(css.address_line_2)[0].value = output[1]
    const city = output[2] 
    if( city !== ' undefined' && city !== undefined && typeof city !== 'undefined' ) {
      document.getElementsByClassName(css.city)[0].value = output[2]
    }
    set_suggestions_display(css.suggestion_cont)
  }

  const close_lookup = (event) => {
    set_suggestions_display(css.suggestion_cont)
  }
   
  const validation = async (event) => {
    const first_name = document.getElementsByClassName(css.first_name)[0].value
    const last_name = document.getElementsByClassName(css.last_name)[0].value
    const email = document.getElementsByClassName(css.email)[0].value
    const address_line_1 = document.getElementsByClassName(css.address_line_1)[0].value
    const city = document.getElementsByClassName(css.city)[0].value.slice(1)
    const postcode = document.getElementsByClassName(css.postcode)[0].value
    const country = document.getElementsByClassName(css.country)[0].value
    var count = 0
    const city_wo_spaces = city.replace(/\s/g, '')

    if(/[^A-Za-z]/.test(first_name)) {
      count += 1
    }
    if(/[^A-Za-z]/.test(last_name)) {
      count += 1
    }
    if(/[^A-Za-z]/.test(city_wo_spaces)) {
      count += 1
    }
    if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      count += 1
    }
    if(first_name.length == 0) {
      count += 1
    }
    if(last_name.length == 0) {
      count += 1
    }
    if(city.length == 0) {
      count += 1
    }
    if(address_line_1.length == 0) {
      count += 1
    }
    if(postcode.length == 0) {
      count += 1
    }
    if(country == 'Select Country') {
      count += 1
    }

    if( count !== 0 ) {
      if(/[^A-Za-z]/.test(first_name)) {
        set_first_name(`${css.first_name} ${css.field_error}`)
      }else {
        set_first_name(css.first_name)
      }
      if(/[^A-Za-z]/.test(last_name)) {
        set_last_name(`${css.last_name} ${css.field_error}`)
      }else {
        set_last_name(css.last_name)
      }
      if(/[^A-Za-z]/.test(city)) {
        set_city(`${css.city} ${css.field_error}`)
      }else {
        set_city(css.city)
      }
      if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        set_email(`${css.email} ${css.field_error}`)
      }else {
        set_email(css.email)
      }
      if(first_name.length == 0) {
        set_first_name(`${css.first_name} ${css.field_error}`)
      }else {
        set_first_name(css.first_name)
      }
      if(last_name.length == 0) {
        set_last_name(`${css.last_name} ${css.field_error}`)
      }else {
        set_last_name(css.last_name)
      }
      if(city.length == 0) {
        set_city(`${css.city} ${css.field_error}`)
      }else {
        set_city(css.city)
      }
      if(address_line_1.length == 0) {
        set_address_line_1(`${css.address_line_1} ${css.field_error}`)
      }else {
        set_address_line_1(css.address_line_1)
      }
      if(postcode.length == 0) {
        set_postcode(`${css.postcode} ${css.field_error}`)
      }else {
        set_postcode(css.postcode)
      }
      if(country == 'Select Country') {
        set_country(`${css.country} ${css.field_error}`)
      }else {
        set_country(css.country)
      }
    }else {
      set_email(css.email)
      set_first_name(css.first_name)
      set_last_name(css.first_name)
      set_city(css.city)
      set_address_line_1(css.address_line_1)
      set_postcode(css.postcode)
      set_country(css.country)
      var item_ids = []
      items.map((item) => {
        item_ids.push(item.id)
      })
      var amount = payment.slice(1, payment.length)
      const checkout_paylaod = {'amount': amount,
                                'item_ids': item_ids,
                                'customer_id': (first_name + '_' + last_name + '_' + postcode),
                                'email': email,
                                'phone_number': document.getElementsByClassName(css.phone_number)[0].value,
                                'address_line_1': document.getElementsByClassName(css.address_line_1)[0].value,
                                'address_line_2': document.getElementsByClassName(css.address_line_2)[0].value,
                                'address_line_3': document.getElementsByClassName(css.address_line_3)[0].value,
                                'country': document.getElementsByClassName(css.country)[0].value,
                                'city': document.getElementsByClassName(css.city)[0].value,
                                'area': document.getElementsByClassName(css.area)[0].value,
                                'postcode': document.getElementsByClassName(css.postcode)[0].value }     

      try {
        navigate('/payment', { state: { checkout_paylaod : checkout_paylaod }})
      } catch (error) {
          console.log(error)
      }
    }
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
            <input className={first_name} onClick={close_lookup} type="text" placeholder="First Name"></input>
            <input className={last_name} onClick={close_lookup} type="text" placeholder="Last Name"></input>
            <input className={email} onClick={close_lookup} type="text" placeholder="Email"></input>
            <input className={css.phone_number} onClick={close_lookup} type="text" placeholder="Phone Number"></input>
          </div>
          <div className={css.address_cont} >
            <div className={css.address_line_1_cont}>
              <input className={address_line_1} onChange={addressInput} onClick={close_lookup} type="text" 
                     placeholder="Address Line 1"></input>
              <div className={css.address_lookup} onClick={addressAPI} type="text" placeholder="Lookup">Lookup</div>
            </div>
            <select className={suggestions_display} onChange={optionSelect}>
            <option className={css.options} key="0"></option> {createOptions}</select>
            <input className={css.address_line_2} onClick={close_lookup} type="text" placeholder="Address Line 2"></input>
            <input className={css.address_line_3} onClick={close_lookup} type="text" placeholder="Address Line 3"></input>
            <input className={city} onClick={close_lookup} type="text" placeholder="City/Locality"></input>
            <input className={css.area} onClick={close_lookup} type="text" placeholder="State/Province"></input>
            <input className={postcode} onClick={close_lookup} type="text" placeholder="Postal Code"></input>
            <Countries class={country}/>
          </div>
          <div className={css.payment_button} onClick={validation}>Payment</div>
        </div>
      </div>
    </div>
  ); 
}

