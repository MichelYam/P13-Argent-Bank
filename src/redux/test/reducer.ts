import { IUser } from "./actions";
import { GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SET_CURRENT_USER_SUCCESS } from './constants/AuthTypes'

export interface IDataAPI {
    isAuthenticated: boolean,
    loading: boolean,
    userInfo?: IUser | null,
    userToken: string | null,
    error: string | null,
}
const initialState = {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
    userToken: sessionStorage.getItem('userToken') || null,
    error: null,
}

export default function userReducer(state: IDataAPI = initialState, action: any) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                loading: true,
            }
        case SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userToken: action.payload
            }
        case SET_CURRENT_USER_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            }
        case GET_USER:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload.body
            }
        case GET_USER_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            }
        default:
            return state;
    }
}

