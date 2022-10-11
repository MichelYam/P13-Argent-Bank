import { createSlice } from "@reduxjs/toolkit";
import { selectUser } from "../utils/selector";
import { userLogin } from './userActions'
// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    status: 'void',
    error: null,
    loading: false,
    userInfo: {},
    userToken,
    success: false,
}
export async function fetchGetUser(dispatch, getState) {
    const status = selectUser(getState()).status
    if (status === 'pending' || status === 'updating') {
        // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
        return
    }
    dispatch(actions.fetching())
    try {
        // on utilise fetch pour faire la requête
        const response = await fetch('http://localhost:8000/freelances')
        const data = await response.json()
        dispatch(actions.resolved(data))
    } catch (error) {
        dispatch(actions.rejected(error))
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false
            // state.error = payload.message
        })
    }
});

export default userSlice.reducer