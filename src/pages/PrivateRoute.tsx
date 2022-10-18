import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store';
import { selectUser } from '../utils/selector' 

export const PrivateRoute = () => {
    const { userInfo } = useAppSelector(selectUser);
    return (
        <>
            {!userInfo ?
                <div className='unauthorized'>
                    <h1>Unauthorized :(</h1>
                    <span>
                        <Link to='/login'>Login</Link> to have access
                    </span>
                </div> : null
            }
        </>
    )
}

