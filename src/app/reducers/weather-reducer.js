const initialState = {
    weather: 'cold',
    fetching: false,
    fetched: false,
    error: null
}

export function weather(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_WEATHER': {
            return { ...state, fetching: true }
        }
        case 'FETCH_WEATHER_REJECTED': {
            return { ...state, fetching: false, error: action.payload }
        }
        case 'FETCH_WEATHER_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                weather: action.payload
            }
        }

        default:
            state = state.test
    }

    return state
}
