import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/user";
export interface IUser {
    email?: string,
    password?: string,
    firstName?: string | null;
    lastName?: string | null;
    remember?: boolean;
}
export const userLogin = createAsyncThunk("user/login", async ({ email, password }: IUser, { rejectWithValue }) => {
    try {
        const response = await fetch(`${BASE_URL}/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        )
        let data = await response.json()
        console.log("response", data)
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
        console.log("data: ", data)
        return data 
    } catch (error) {
        console.log(error)
    }
}
)

// export const updateUserProfile = async ( getSate) => {
//     const user = getSate()
//     try {
//         const config = {
//             header: {
//                 Authorization: `Bearer ${user.userToken}`,
//                 'Content-Type': 'application/json'
//             },
//         }
//         const { data } = await axios.post(`${BASE_URL}/profile`, config);
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }
