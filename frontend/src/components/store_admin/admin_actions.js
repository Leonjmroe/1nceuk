import axios from "axios";


export const addItem = (item, id) => {
  axios.post('/api/items/item-list/', item)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  };


export const getItems = () => { 
  const items = axios.get('/api/items/item-list/')
    .then((response) => response.data)
  return items
}


export const deleteItem = (item, id) => {
  axios.delete(`/api/items/item-list/${id}`, item)
    .then(function (response) { 
      console.log(response) 
    })
    .catch(function (response) { 
      console.log(response) 
    });
  };


export const editItem = (item, id) => {
  axios.put(`/api/items/item-list/${id}`, item)
    .then(function (response) { 
      console.log(response) 
    })
    .catch(function (response) { 
      console.log(response) 
    });
  };




