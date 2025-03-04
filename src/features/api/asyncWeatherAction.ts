import {createAsyncThunk} from "@reduxjs/toolkit";
import {api_key, base_url} from "../../utils/constants.ts";

export const fetchWeather = createAsyncThunk(
    'weather/fetch',
    async (city: string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        if(!response) {
            throw new Error('Enter correct city name')
        }
        const data = await response.json();
        return {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset * 1000,
            timestamp: Date.now()
        }
    }
)