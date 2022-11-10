import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import userReducer from './reducer';

const initialState = {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
    userToken: sessionStorage.getItem('userToken') || null,
    error: null,
};
const middleware = [thunk]
const store = createStore(
    userReducer, initialState, applyMiddleware(...middleware)
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store, initialState };