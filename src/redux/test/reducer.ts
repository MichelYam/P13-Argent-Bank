import { GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SET_CURRENT_USER_SUCCESS } from './constants/AuthTypes'
import { initialState } from "./store";

interface Action {
    type: string
    payload?: string
}
export default function userReducer(state = initialState, action: any) {
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
                loading: false,
                error: action.payload,
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
                userInfo: action.payload
            }
        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
