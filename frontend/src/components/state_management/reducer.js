import { useState } from 'react';


export const initialState = {
	count: 0,
	items: []
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
		default:
			return state
	}
}