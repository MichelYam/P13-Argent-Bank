import { createSlice } from "@reduxjs/toolkit";
// import { selectUser } from "../utils/selector";

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    status: 'void',
    data: null,
    error: null,
    loading: false,
    userInfo: null,
    userToken,
    success: false,
}


const slice = createSlice({
    name: 'user',
    initialState: {
        users: [],
    },
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload
        },
    },
});

export default slice.reducer