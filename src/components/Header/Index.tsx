import React, { useEffect } from 'react'
import { Navigation } from '../Navigation/Index'
import { selectUser } from '../../utils/selector';
import { logout } from '../../features/user/User';
// import { getUserDetails } from '../../features/user/userActions';
import { getUserDetails } from '../../redux/test/actions';
import { useAppDispatch, useAppSelector } from '../../redux/test/store';
import { useSelector } from 'react-redux';

export const Header = () => {
    const { userInfo, userToken } = useSelector(selectUser)
    const dispatch = useAppDispatch()
    const logOut = () => { dispatch(logout()) }
    useEffect(() => {
        const fetchData = () => {
            if (userToken) {
                dispatch(getUserDetails(userToken));
            }
        }
        fetchData()
    }, [dispatch, userToken])
    return (
        <Navigation userInfo={userInfo} userToken={userToken} logout={logOut} />
    )
}
