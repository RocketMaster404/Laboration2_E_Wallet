import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../reducers/cardReducer";

const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
});

export default store;
