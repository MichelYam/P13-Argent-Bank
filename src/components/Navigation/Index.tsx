import React from 'react';
import { Link } from "react-router-dom";
import { IUser } from '../../features/user/userActions';

import PropTypes from "prop-types";
import "./Style.css";

interface INavigation {
    userInfo?: IUser | null,
    isAuthenticated?: boolean,
    logout: () => void
}

export const Navigation: React.FC<INavigation> = ({ userInfo, isAuthenticated, logout }) => {

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
                {!isAuthenticated ?
                    <>
                        <Link className="main-nav-item" to={`/signin`}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                        <Link className="main-nav-item" to={`/signup`}>
                            <i className="fa fa-user-circle"></i>
                            Sign Up
                        </Link>
                    </>
                    :
                    <>
                        <Link className="main-nav-item" to={"/user"}>
                            <i className="fa fa-user-circle"></i>
                            {userInfo?.firstName}
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

Navigation.propTypes = {
    userInfo: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
}
