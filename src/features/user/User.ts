import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails, IUser } from './userActions'

const initialState = {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
    userToken: sessionStorage.getItem('userToken') || null,
    error: null,
}
export interface IDataAPI {
    isAuthenticated: boolean,
    loading: boolean,
    userInfo?: IUser | null,
    userToken: string | null,
    error: {} | null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            sessionStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false
            // state.userInfo = payload
            state.userToken = payload.body.token
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false
            // state.error = payload
        })
        builder.addCase(getUserDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.body
        })
        builder.addCase(getUserDetails.rejected, (state, { payload }) => {
            state.loading = false
            // state.error = payload
        })

    }
});
export const { logout } = userSlice.actions;
export default userSlice.reducer