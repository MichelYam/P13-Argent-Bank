import { IUser } from "./actions";
import { EDIT_USER, EDIT_USER_ERROR, EDIT_USER_SUCCESS } from './constants/AuthTypes'

const initialState = {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
    userToken: sessionStorage.getItem('userToken') || null,
    error: null,
}
export interface IDataAPI {
    isAuthenticated: boolean,
    loading: boolean,
    userInfo?: IUser | null,
    userToken: string | null,
    error: string | null,
}

export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
                loading: action.loading,
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userInfo: action.payload
            }
        case EDIT_USER_ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
            }
    }
}

