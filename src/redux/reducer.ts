import { createSlice } from "@reduxjs/toolkit";

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