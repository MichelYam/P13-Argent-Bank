import React, { useEffect } from 'react'
import { Navigation } from '../Navigation/Index'
import { selectUser } from '../../utils/selector';
import { logout } from '../../features/user/User';
// import { getUserDetails } from '../../features/user/userActions';
import { getUserDetails } from '../../redux/test/actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';



export const Header = () => {
    const { userInfo, userToken } = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    console.log("token", userToken)
    const logOut = () => { dispatch(logout()) }
    useEffect(() => {
        const fetchData = () => {
            if (userToken) {
                dispatch(getUserDetails(userToken));
                console.log("user",userInfo)
            }
        }
        fetchData()
    }, [dispatch, userToken])
    return (
        <Navigation userInfo={userInfo} userToken={userToken} logout={logOut} />
    )
}

// const mapStateToProps = (state: { body: { data: any; }; }) => ({
//     ...state,
//     user: state.body.data
//   });

// export default connect(mapStateToProps)(Header);
// export { Header, mapStateToProps };