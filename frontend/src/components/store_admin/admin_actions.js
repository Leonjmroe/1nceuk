import axios from "axios";


export const addItem = (item, id) => {
  axios.post('/api/items/item-list/', item)
    .then(function (response) {
      console.log(response);
      window.location.reload()
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


export const deleteItem = (id, mode) => {
  axios.delete(`/api/items/item-list/${id}`, { 'mode': mode })
    .then(function (response) { 
      if( mode == 1 ) {
        window.location.reload()
      }
    })
    .catch(function (response) { 
      console.log(response) 
    });
  };


export const editItem = (item, id) => {
  axios.put(`/api/items/item-list/${id}/`, item)
    .then(function (response) { 
      console.log(response) 
      window.location.reload()
    })
    .catch(function (response) { 
      console.log(response) 
    });
  };




