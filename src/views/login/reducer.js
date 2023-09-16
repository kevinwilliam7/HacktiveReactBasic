import { createSlice } from "@reduxjs/toolkit";

const initialState=  {
    email: "",
    password: "",
    users: [],
}

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialState,
    reducers: {
        stateGetEmail: (state, action) => {
            state.email = action.payload
        },
        stateGetPassword: (state, action) => {
            state.password = action.payload
        },
        stateGetUser: (state, action) => {
            state.users = action.payload
        }
    },
});

export const {stateGetEmail, stateGetPassword, stateGetUser} = loginSlice.actions
export default loginSlice.reducer