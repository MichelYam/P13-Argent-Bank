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

export const userLogin = async ({ email, password }: IUser) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/login`, { email, password });
        localStorage.setItem("userToken", data.body.token);
        dispatch(setToken(data.body.token));
        return data;
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}

export const getUserDetails = async () => {
    const { userToken } = getSate()
    try {
        const config = {
            header: {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            },
        }
        const { data } = await axios.post(`${BASE_URL}/profile`, config);
        return data
    } catch (error) {
        console.log(error)
    }
}


function getSate(): { userToken: any; } {
    throw new Error("Function not implemented.");
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

export const logout = () => {
    localStorage.removeItem("userToken");
    setAuthToken(false);

    redirect("/");
};

function dispatch(arg0: { payload: any; type: string; }) {
    throw new Error("Function not implemented.");
}

