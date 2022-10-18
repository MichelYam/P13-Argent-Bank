import React, { useEffect } from 'react'
import { Navigation } from '../Navigation/Navigation'
import { selectUser } from '../../utils/selector';
import { logout } from '../../features/user/User';
import { getUserDetails } from '../../features/user/userActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';


export const Header = () => {
    const { userToken } = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const logOut = () => { dispatch(logout()) }
    useEffect(() => {
        const fetchData = () => {
            if (userToken) {
                dispatch(getUserDetails());
            }
        }
        fetchData()
    }, [dispatch, userToken])
    return (
        <Navigation userToken={userToken} logout={logOut} />
    )
}
