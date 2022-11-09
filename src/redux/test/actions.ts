// import { SET_CURRENT_USER } from "./constants/AuthTypes";
import axios from "axios";
import { Dispatch } from "react";
import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SET_CURRENT_USER_SUCCESS, GET_USER, GET_USER_ERROR, GET_USER_SUCCESS } from './constants/AuthTypes'
// import store from "./store";
const BASE_URL = "http://localhost:3001/api/v1/user";

export interface IUser {
    email?: string,
    password?: string,
    firstName?: string;
    lastName?: string;
    remember?: boolean;
}
export const userLogin = ({ email, password }: IUser) => {
    return async (dispatch: any) => {
        dispatch(loginUser())
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        try {
            const { data } = await axios.post(`${BASE_URL}/login`, { email, password }, config);
            console.log("data:", data)
            if (!data) {
                throw new Error('Error - 404 Not Found');
            }
            sessionStorage.setItem("userToken", data.body.token)
            dispatch({
                type: SET_CURRENT_USER_SUCCESS,
                loading: false,
                userToken: data.body.token
            });
        } catch (error) {
            console.log(error);
            dispatch(loginUserError(error));
        }
    }
}


export const loginUser = () => ({
    type: SET_CURRENT_USER,
    loading: true,
})
export const loginUserSuccess = (data: any) => ({
    type: SET_CURRENT_USER_SUCCESS,
    loading: false,
    data
})
export const loginUserError = (error: any) => ({
    type: SET_CURRENT_USER_ERROR,
    loading: false,
    error: error,
})

export const getUserDetails = (userToken: string) => {

    return async (dispatch: any) => {
        dispatch(getUser())
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        }
        try {
            const { data } = await axios.post(`${BASE_URL}/profile`, {}, config);
            if (!data) {
                throw new Error('Error - 404 Not Found');
            }
            dispatch(getUserSuccess(data));
            console.log("data:", data)
        } catch (error) {
            console.log(error);
            dispatch(getUserError(error));
        }
    }
}

export const getUser = () => ({
    type: GET_USER,
    loading: true,
})
export const getUserSuccess = (data: any) => ({
    type: GET_USER_SUCCESS,
    loading: false,
    data
})
export const getUserError = (error: any) => ({
    type: GET_USER_ERROR,
    loading: false,
    error: error,
})


// export const updateUserProfile = async ({ firstName, lastName }: IUser) => {
//     return async (dispatch: any) => {
//         dispatch(editUser())
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${user.userToken}`,
//             },
//         }
//         try {
//             const response = await axios.put(`${BASE_URL}/profile`, { firstName, lastName }, config);
//             if (!response.ok) {
//                 throw new Error('Error - 404 Not Found');
//             } dispatch(editUserSuccess(data));
//         } catch (error) {
//             console.log(error);
//             dispatch(editUserError(error));
//         }
//     }
// try {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${user.userToken}`,
//         },
//     }
//     const { data } = await axios.put(`${BASE_URL}/profile`, { firstName, lastName }, config);
//     // console.log("update:",data)
//     return data
// } catch (error: any) {
//     if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//     } else {
//         return rejectWithValue(error.message)
//     }
// }
// }

// export const userRegister = createAsyncThunk('user/userRegister', async ({ lastName, firstName, email, password }: IUser, { rejectWithValue }) => {
//     try {
//         const config = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }
//         const { data } = await axios.post(`${BASE_URL}/signup`, { lastName, firstName, email, password }, config);
//         // console.log("login", data)
//         sessionStorage.setItem("userToken", data.body.token)
//         return data;
//     } catch (error: any) {
//         if (error.response && error.response.data.message) {
//             return rejectWithValue(error.response.data.message)
//         } else {
//             return rejectWithValue(error.message)
//         }
//     }
// })

// Set logged in user
// export const setCurrentUser = (action: any) => {
//     return {
//         type: SET_CURRENT_USER,
//         payload: action
//     };
// };

