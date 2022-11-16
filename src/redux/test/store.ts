import axios from 'axios';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import userReducer from './reducer';

const initialState = {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
};
function setInitialState() {
    const token =
        localStorage.getItem('token') || sessionStorage.getItem('token') || null;
    if (token === null) return initialState;
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return { ...initialState, loggedIn: true, token };
}

const middleware = [thunk]
const store = createStore(
    userReducer, setInitialState(), applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store, initialState };