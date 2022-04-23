import axios from "axios";
import { returnItems } from './store_admin.js';


export const addItem = (item) => {
  axios({
  method: "post",
  url: "/api/items/item-list/",
  data: item,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
};

var items = null

export const getItems = () => { 
  items = axios.get('/api/items/item-list/').then((response) => response.data)
  return items
}




// export const getItems = () => {
//     return axios.get('/api/items/item-list/').then(response => response).then(data => {
//     })
// }




// export const getItems = async () => {
//   var data = null
//   await fetch('/api/items/item-list/')
//   .then((response) => response.json())
//   .then((data) => {
//     data = data
//   });
//   return data
// };


// export const getItems = (item) => {
  
//   const request = axios({
//     method: "get",
//     url: "/api/items/item-list/",
//   })
  
//   const data = request.then((response) => response.data.result)
  
//   // const error = request.catch(function (response) {
//   //   console.log(response);
//   // });

//   return data

//   };


//   async function axiosTest() {
//     const response = await axios.get(url)
//     return response.data
// }




// export const deleteItems = id => dispatch => {
//   axios
//     .delete(`/api/v1/notes/${id}/`)
//     .then(response => {
//       dispatch({
//         type: DELETE_NOTE,
//         payload: id
//       });
//     })
//     .catch(error => {
//       console.log(error)
//     });
// };

// export const updateItems = (id, item) => dispatch => {
//   axios
//     .patch(`/api/v1/notes/${id}/`, note)
//     .then(response => {
//       dispatch({
//         type: UPDATE_NOTE,
//         payload: response.data
//       });
//     })
//     .catch(error => {
//       console.log(error)
//     });
// };
