const RESET = "RESET";

const initialState = {
	  error: false
	, loading: false
	, search: true
	, weather: {}
};

export default function weather( state = initialState, action ) {
	switch ( action.type ) {
		case RESET: return initialState;
		default: return state;
	}
}

export function reset() {
	return { type: RESET };
}
