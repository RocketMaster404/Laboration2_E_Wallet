import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [
        {
            Id: 1,
            bankId: 1,
            cardNumber: "1234 5678 9102 3478",
            cardName: "Erik Ny",
            validDate: "11/12",
        },
        {
            Id: 2,
            bankId: 2,
            cardNumber: "1234 5678 9102 3478",
            cardName: "Pontus Thorén",
            validDate: "10/12",
        },
        {
            Id: 3,
            bankId: 3,
            cardNumber: "1234 5678 9102 3478",
            cardName: "Viktor Andersson",
            validDate: "09/11",
        },
        {
            Id: 4,
            bankId: 4,
            cardNumber: "1234 5678 9102 3478",
            cardName: "Johanna Karlsson",
            validDate: "07/08",
        },
    ],
};

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
    },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
