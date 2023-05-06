import { useState } from 'react';


export const initialState = {
	count: 0,
	items: [],
	client_secret: null
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'add_to_basket':
			return { ...state, 
					count: state.count + 1,
					items: [ ...state.items,
							action.payload ]}
		case 'remove_from_basket':
			return { ...state, 
					count: state.count - 1 }
		case 'reset_basket':
			return { ...state, 
					count: 0 }
		case 'set_basket':
			return { count: action.payload.length,
					 items: action.payload }
		case 'client_secret':
			return { ...state, 
					 client_secret: action.payload }
		default:
			return state
	}
}