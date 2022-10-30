import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/user";

export interface IUser {
    email?: string,
    password?: string,
    firstName?: string;
    lastName?: string;
    remember?: boolean;
}
export const userLogin = createAsyncThunk("user/login", async ({ email, password }: IUser, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const { data } = await axios.post(`${BASE_URL}/login`, { email, password }, config);
        sessionStorage.setItem("userToken", data.body.token)
        return data;
    } catch (error) {
        // if (error.response && error.response.data.message) {
        //     return rejectWithValue(error.response.data.message)
        // } else {
        //     return rejectWithValue(error.message)
        // }
        if (typeof error === 'object' && error !== null) {
            console.log(error.toString());
        } else {
            console.log('Unexpected error', error);
        }
    }
}
)

export const getUserDetails = createAsyncThunk("user/getUserDetails", async (arg, { rejectWithValue, getState }) => {
    const { user }: any = getState()
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${user.userToken}`,
            },
        }
        const { data } = await axios.post(`${BASE_URL}/profile`, arg, config);
        // console.log("getUser: ", data)
        return data
    } catch (error) {
        console.log(error)
    }
}
)

export const updateUserProfile = createAsyncThunk("user/updateUserProfile", async ({ firstName, lastName }: IUser, { rejectWithValue, getState }) => {
    const { user }: any = getState()
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${user.userToken}`,
            },
        }
        const { data } = await axios.put(`${BASE_URL}/profile`, { firstName, lastName }, config);
        // console.log("update:",data)
        return data
    } catch (error) {
        console.log(error)
    }
}
)


export const userRegister = createAsyncThunk('user/userRegister', async ({ lastName, firstName, email, password }: IUser, { rejectWithValue }) => {
    try {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const { data } = await axios.post(`${BASE_URL}/signup`, { lastName, firstName, email, password }, config);
        // console.log("login", data)
        sessionStorage.setItem("userToken", data.body.token)
        return data;
    } catch (error) {
        if (typeof error === 'object' && error !== null) {
            console.log(error.toString());
        } else {
            console.log('Unexpected error', error);
        }
    }
})