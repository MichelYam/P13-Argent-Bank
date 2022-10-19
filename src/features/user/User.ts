import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails, updateUserProfile, IUser } from './userActions'

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
        builder
            //Login
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userToken = payload?.body.token
            })

            .addCase(userLogin.rejected, (state, { payload }) => {
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