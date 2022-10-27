import React, { useEffect } from 'react'
import { Navigation } from '../Navigation/Index'
import { selectUser } from '../../utils/selector';
import { logout } from '../../features/user/User';
import { getUserDetails } from '../../features/user/userActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';


export const Header = () => {
    const { userInfo, isAuthenticated } = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const logOut = () => { dispatch(logout()) }
    useEffect(() => {
        const fetchData = () => {
            if (isAuthenticated) {
                dispatch(getUserDetails());
            }
        }
        fetchData()
    }, [dispatch, isAuthenticated])
    return (
        <Navigation userInfo={userInfo} isAuthenticated={isAuthenticated} logout={logOut} />
    )
}
