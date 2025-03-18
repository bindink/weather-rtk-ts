import {api_key, base_url, weather_cache_time} from "../../utils/constants.ts";
import {WeatherInfo, WeatherInfoResponse} from "../../utils/types.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    // refetchOnMountOrArgChange:
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: city => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor: weather_cache_time,
            transformResponse: (data: WeatherInfoResponse) => ({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000
            })

        })
    })
})

export const {useGetWeatherByCityQuery} = weatherApi;
// export const fetchWeather = createAsyncThunk(
//     'weather/fetch',
//     async (city: string) => {
//         const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//         if(!response) {
//             throw new Error('Enter correct city name')
//         }
//         const data = await response.json();
//         return {
//             country: data.sys.country,
//             city: data.name,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: data.sys.sunset * 1000,
//             timestamp: Date.now()
//         }
//     }
// )