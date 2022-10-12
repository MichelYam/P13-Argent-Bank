import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
        // const config = {
        //     header: {
        //         'Content-Type': 'application/json',
        //     },
        // }
        const { data } = await axios.post(`${BASE_URL}/login`, { email, password });
        localStorage.setItem("userToken", data.body.token);
        localStorage.setItem("user", data.email);
        return data;
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}
