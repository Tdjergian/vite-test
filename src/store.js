import { configureStore } from "@reduxjs/toolkit";
import wineReducer from './features/wineSlice.js'

const store = configureStore(
    {
        reducer: {
            wine: wineReducer
        }
    }
)

export default store