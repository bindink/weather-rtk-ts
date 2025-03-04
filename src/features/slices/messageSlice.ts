import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => '...Pending')
            .addCase(fetchWeather.rejected, (_state, action) => action.error.message)
            .addCase(fetchWeather.fulfilled, () => '')
    }
})

export default messageSlice.reducer;