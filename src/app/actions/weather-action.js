export function fetchWeather() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_WEATHER' })

        // getWeatherTemp().then(result =>
        //     dispatch({ type: 'FETCH_WEATHER_FULFILLED', payload: result })
        //     , () => dispatch({ type: 'FETCH_WEATHER_REJECTED', payload: 'err' })
        // )
    }
}
