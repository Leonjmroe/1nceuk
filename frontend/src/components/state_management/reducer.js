import { useState } from 'react';


// const initialState = {
// 	items: [],
// 	item_size: []
// }

// const reducer = ({ state, action }) => {
// 	switch (action.type) {
// 		case 'add_item':
// 			return { ...state, state.append(payload) }
// 		case 'remove_item':
// 			return { ...state,  }
// 	}
// }





// **** -------- Larger Logic Reducer -------- *** 

export const initialState = {
  basket: 0,
  banana: 12
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + action.payload }
		case 'decrement':
			return { ...state, count: state.count - action.payload }
		case 'reset':
			return { ...state, count: 0 }
		case 'cunt_bucket':
			return { ...state, banana: state.banana * action.payload }
		default:
			return state
	}
}