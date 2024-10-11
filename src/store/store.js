
import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./reducer/alertReducer";

let store = configureStore({
    reducer : {
        alertReducer,
    },
    devTools : true,
});

export default store