import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../utils/selector';
import { setToken } from '../../features/user/User';


export const Header = () => {
    const { userInfo, userToken } = useSelector(selectUser);
    const dispatch = useDispatch()
    // useEffect(() => {
    //     if (userToken) {
    //         dispatch(getUserDetails());
    //     }
    // })

    const logOut = () => {
        localStorage.removeItem("userToken");
        dispatch(setToken(""))
    }
    return (
        <Navigation userToken={userToken} logout={logOut} />
    )
}
