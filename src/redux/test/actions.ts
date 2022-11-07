// import { SET_CURRENT_USER } from "./constants/AuthTypes";
import axios from "axios";
import { EDIT_USER, EDIT_USER_ERROR, EDIT_USER_SUCCESS } from './constants/AuthTypes'
const BASE_URL = "http://localhost:3001/api/v1/user";

export interface IUser {
    email?: string,
    password?: string,
    firstName?: string;
    lastName?: string;
    remember?: boolean;
}
export const userLogin = ({ email, password }: IUser) => {
    return (dispatch: any) => {
        console.log("test")
        dispatch(loginUser())
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        try {
            const response = axios.put(`${BASE_URL}/profile`, { email, password }, config);
            console.log(response)
            if (!response) {
                throw new Error('Error - 404 Not Found');
            } dispatch(loginUserSuccess(response));
        } catch (error) {
            console.log(error);
            dispatch(loginUserError(error));
        }
    }
}


export const loginUser = () => ({
    type: EDIT_USER,
    loading: true,
})
export const loginUserSuccess = (data: any) => ({
    type: EDIT_USER_SUCCESS,
    loading: false,
    data
})
export const loginUserError = (error: any) => ({
    type: EDIT_USER_ERROR,
    loading: false,
    error,
})
// export const getUserDetails = createAsyncThunk("user/getUserDetails", async (arg, { rejectWithValue, getState }) => {
//     const { user }: any = getState()
//     try {
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${user.userToken}`,
//             },
//         }
//         const { data } = await axios.post(`${BASE_URL}/profile`, arg, config);
//         // console.log("getUser: ", data)
//         return data
//     } catch (error: any) {
//         if (error.response && error.response.data.message) {
//             return rejectWithValue(error.response.data.message)
//         } else {
//             return rejectWithValue(error.message)
//         }
//     }
// }
// )

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

