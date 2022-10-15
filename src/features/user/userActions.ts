import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect } from 'react-router-dom'
import axios from "axios";
import { setToken } from "./User";
import { useDispatch } from "react-redux";

const BASE_URL = "http://localhost:3001/api/v1/user";
export interface IUser {
    email: string,
    password: string,
    lastName?: string;
    firstName?: string;
    remember?: boolean;
}

// export const userLogin = async ({ email, password }: IUser) => {
//     try {
//         const { data } = await axios.post(`${BASE_URL}/login`, { email, password });
//         localStorage.setItem("userToken", data.body.token);
//         dispatch(setToken(data.body.token));
//         return data;
//     } catch (error) {
//         let errorMessage = "Failed to do something exceptional";
//         if (error instanceof Error) {
//             errorMessage = error.message;
//         }
//         console.log(errorMessage);
//     }
// }
export const userLogin = createAsyncThunk("users/login", async ({ email, password }: IUser, { rejectWithValue }) => {
    try {
        const response = await fetch(`${BASE_URL}/login`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
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
export const getUserDetails = async () => {
    // const { userToken } = getSate()
    // try {
    //     const config = {
    //         header: {
    //             Authorization: `Bearer ${userToken}`,
    //             'Content-Type': 'application/json'
    //         },
    //     }
    //     const { data } = await axios.post(`${BASE_URL}/profile`, config);
    //     dispatch(getUser(data))
    //     return data
    // } catch (error) {
    //     console.log(error)
    // }
}

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

const setAuthToken = (token: string | boolean | null | undefined) => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

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

