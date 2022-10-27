import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, getUserDetails, updateUserProfile, IUser } from './userActions'
import type { PayloadAction } from '@reduxjs/toolkit'
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
    error: string | null,
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
            state.isAuthenticated = false
        },
    },
    extraReducers: (builder) => {
        builder
            //Login
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userToken = payload?.body.token
                state.isAuthenticated = true
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                // state.error = payload
            })
            //Register
            .addCase(userRegister.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userRegister.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userToken = payload?.body.token
            })

            .addCase(userRegister.rejected, (state, { payload }) => {
                state.loading = false
                // state.error = payload
            })
            //Get user
            .addCase(getUserDetails.pending, (state) => {
                state.loading = true
            })
            .addCase(getUserDetails.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload?.body
            })
            .addCase(getUserDetails.rejected, (state, { payload }: any) => {
                state.loading = false
            })

            //Update user
            .addCase(updateUserProfile.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload?.body
            })
            .addCase(updateUserProfile.rejected, (state, { payload }: any) => {
                state.loading = false
            })

    }
});
export const { logout } = userSlice.actions;
export default userSlice.reducer