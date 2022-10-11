import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3030/api/v1/users/";

interface dataInterface {
    email: string,
    password: string,
}

export const userLogin = createAsyncThunk('user/login', async ({ email, password }: dataInterface, { rejectWithValue }) => {
    try {
        // const config = {
        //     header: {
        //         'Content-Type': 'application/json',
        //     },
        // }
        const { data } = await axios.post(`${BASE_URL}/login`, { email, password });
        localStorage.setItem("userToken", data.userToken);
        return data;
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
})