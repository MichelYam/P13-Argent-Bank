import React, { useEffect } from 'react';
import "./Style.css";
import { Link, redirect } from "react-router-dom";
// import { logout } from '../../features/user/userActions';

interface INavigation {
    userToken: string | null,
    logout: () => void
}

export const Navigation: React.FC<INavigation> = ({ userToken, logout }) => {

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
                {!userToken ?
                    <Link className="main-nav-item" to={`/signin`}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link> :
                    <>
                        <Link className="main-nav-item" to={"/user"}>
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </Link>
                        <Link className="main-nav-item" to={"/signin"} onClick={logout}>
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

