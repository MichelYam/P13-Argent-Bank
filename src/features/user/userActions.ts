import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

const BASE_URL = "http://localhost:3001/api/v1/user";
export interface IUser {
    email: string,
    password: string,
    firstName?: string ;
    lastName?: string ;
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
        localStorage.setItem("userToken", data.token)
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
    console.log("user:", user)
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${user.userToken}`,
                'Content-Type': 'application/json'
            },
        }
        const { data } = await axios.post(`${BASE_URL}/profile`, config);
        console.log(data)
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

// export const logout = () => {
//     localStorage.removeItem("userToken");
//     // setAuthToken(false);
//     // redirect("/");
// };

function dispatch(arg0: { payload: any; type: string; }) {
    throw new Error("Function not implemented.");
}

function getUser(data: any): { payload: any; type: string; } {
    throw new Error("Function not implemented.");
}

