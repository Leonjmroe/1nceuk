import axios from "axios";


export const addItem = (item) => {
  axios({
  method: "post",
  url: "/api/items/item-list/",
  data: item,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    console.log(response);
    //window.location.reload()
  })
  .catch(function (response) {
    console.log(response);
  });
};


export const getItems = () => { 
  const items = axios.get('/api/items/item-list/').then((response) => response.data)
  return items
}


export const deleteItem = (item) => { 
  // const items = axios.delete('/api/items/item-list/').then((response) => response.data)
  // return items
  console.log('Item deleted: ', item)
}

export const editItem = (item) => { 
  // const items = axios.delete('/api/items/item-list/').then((response) => response.data)
  // return items
  console.log('Item updated: ', item)
}






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
