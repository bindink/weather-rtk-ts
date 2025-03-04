import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {WeatherType} from "../../utils/types.ts";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherType,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.rejected, () => {})
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload);
    }
})

export default weatherSlice.reducer