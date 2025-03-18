import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../features/api/weatherAPI.ts";
import city from "../features/slices/citySlice.ts";

export const store = configureStore({
        reducer: {
            city,
            [weatherApi.reducerPath]: weatherApi.reducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
    }
);

// the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch