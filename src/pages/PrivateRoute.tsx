import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import { selectUser } from '../utils/selector'

const ProtectedRoute = () => {
    const { userInfo } = useAppSelector(selectUser)

    if (!userInfo) {
        return (
            <div className='unauthorized'>
                <h1>Unauthorized :(</h1>
                <span>
                    <NavLink to='/signin'>Login</NavLink> to gain access
                </span>
            </div>
        )
    }

    return <Outlet />
}
export default ProtectedRoute