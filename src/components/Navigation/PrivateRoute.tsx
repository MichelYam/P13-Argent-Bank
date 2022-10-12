import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../../utils/selector'

export const PrivateRoute = () => {
    const { userInfo } = useSelector(selectUser);
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

