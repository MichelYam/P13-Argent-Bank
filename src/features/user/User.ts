import { createAction, createSlice } from "@reduxjs/toolkit";
import { userLogin } from './userActions'
// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    isAuthenticated: false,
    loading: false,
    userInfo: {},
    userToken,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => { state.userToken = action.payload },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(userLogin.pending, (state) => {
    //         state.loading = true
    //         state.error = null
    //     })
    //     builder.addCase(userLogin.fulfilled, (state, { payload }) => {
    //         state.loading = false
    //         state.userInfo = payload
    //         state.userToken = payload.userToken
    //     })
    //     builder.addCase(userLogin.rejected, (state, { payload }) => {
    //         state.loading = false
    //         state.error = payload
    //     })
    // }
});
export const { setToken } = userSlice.actions;
export default userSlice.reducer