// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


// const PaymentForm = ({ clientSecret }) => {

//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement)
//     });

//     if (error) {
//       setError(error.message);
//       setProcessing(false);
//     } else {
//       // Submit payment to server
//       console.log
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       {error && <div>{error}</div>}
//       <button disabled={processing}>Pay</button>
//     </form>
//   );
// };

// export default PaymentForm;
