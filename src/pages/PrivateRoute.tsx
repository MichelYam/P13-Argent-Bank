import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/test/store'
import { selectUser } from '../utils/selector'

const ProtectedRoute = () => {
    const { userToken } = useAppSelector(selectUser)

    if (!userToken) {
        return (
            <div className='unauthorized'>
                <h1>Unauthorized :(</h1>
                <span>
                    <NavLink to='/login'>Login</NavLink> to gain access
                </span>
            </div>
        )
    }

    return <Outlet />
}
export default ProtectedRoute