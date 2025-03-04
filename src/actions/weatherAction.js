export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO';
export const PUT_MESSAGE = 'PUT_MESSAGE';

export const putWeatherInfo = weatherInfo => {
    return {
        type: PUT_WEATHER_INFO,
        payload: weatherInfo
    }
}

export const putMessage = message => {
    return {
        type: PUT_MESSAGE,
        payload: message
    }
}