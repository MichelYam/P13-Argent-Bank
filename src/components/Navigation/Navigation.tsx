import React, { useEffect } from 'react';
import "./Style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../utils/selector';


export default function Navigation() {
    const { userInfo, userToken } = useSelector(selectUser);
    const dispatch = useDispatch()
    useEffect(() => {
        if (userToken) {
            dispatch(getUserDetails());
        }
    })

    const logOut = () => {
        dispatch(logOut())
    }

    return (
        <nav className="main-nav">
            <Link to={'/'} className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!user.userToken ?
                    <Link className="main-nav-item" to={`/signin`}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link> :
                    <>
                        <Link className="main-nav-item" to={"./user.html"}>
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </Link>
                        <Link className="main-nav-item" to={"./index.html"} onClick={logOut}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                }
            </div>
        </nav >
    )
}
function setToken(arg0: string): any {
    throw new Error('Function not implemented.');
}

