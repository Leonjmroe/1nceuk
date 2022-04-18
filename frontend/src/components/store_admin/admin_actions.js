import axios from "axios";

// export const getItems = () => dispatch => {
//   axios
//     .get("/api/items/item-list")
//     .then(response => {
//       dispatch({
//         type: 'GET_ITEMS',
//         payload: response.data
//       });
//     })
//     .catch(error => {
//       console.log(error)
//     });
// };

// export const addItem = item => dispatch => {
//   axios
//     .post("/api/items/item-list", item)
//     .then(response => {
//       dispatch({
//         type: 'ADD_ITEM',
//         payload: response.data
//       });
//     })
//     .catch(error => {
//       console.log(error)
//     });
// };

export const addItem = (item) => {
 axios.post('/api/items/item-list/', item).then((response) => {
      const data = response.data
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  };


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
