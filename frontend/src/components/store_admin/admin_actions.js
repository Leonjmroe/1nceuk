import axios from "axios";


export const addItem = async (item, id) => {
  await axios.post('/api/items/item-list/', item)
    .then(function (response) {
      console.log(response);
      window.location.reload()
    })
    .catch(function (response) {
      console.log(response);
    });
  };


export const getItems = async () => { 
  const items = await axios.get('/api/items/item-list/')
    .then((response) => response.data)
  return items
}


export const deleteItem = async (id, mode) => {
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


export const editItem = async (item, id) => {
  await axios.put(`/api/items/item-list/${id}/`, item)
    .then(function (response) { 
      console.log(response) 
      window.location.reload()
    })
    .catch(function (response) { 
      console.log(response) 
    });
  };


export const decrementItem = async (id, qty_small, qty_medium, qty_large, qty_extra_large) => {
  await axios.put(`/api/items/item-bought/`, {id, qty_small, qty_medium, qty_large, qty_extra_large})
    .then(function (response) { 
      console.log(response) 
      window.location.reload()
    })
    .catch(function (response) { 
      console.log(response) 
    });
  };

