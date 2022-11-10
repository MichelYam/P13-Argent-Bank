import React from 'react';
import { Link } from "react-router-dom";
import { IUser } from '../../features/user/userActions';

import PropTypes from "prop-types";
import style from './Style.module.css';

interface INavigation {
    userInfo?: IUser | null,
    userToken?: string | null,
    logout: () => void
}

export const Navigation: React.FC<INavigation> = ({ userInfo, userToken, logout }) => {
    // const test = style.main-nav

    return (
        // <nav className={style['main-nav']}>
        <nav className={style['main-nav']}>
            <Link to={'/'} className={style['main-nav-logo']}>
                <img
                    className={style["main-nav-logo-image"]}
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className={style["sr-only"]}>Argent Bank</h1>
            </Link>
            <div>
                {!userToken ?
                    <>
                        <Link className={style["main-nav-item"]} to={`/login`}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                        <Link className={style["main-nav-item"]} to={`/signup`}>
                            <i className="fa fa-user-circle"></i>
                            Sign Up
                        </Link>
                    </>
                    :
                    <>
                        <Link className={style["main-nav-item"]} to={"/profile"}>
                            <i className="fa fa-user-circle"></i>
                            {userInfo?.firstName}
                        </Link>
                        <Link className={style["main-nav-item"]} to={"/login"} onClick={logout}>
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
    userToken: PropTypes.string,
    logout: PropTypes.func.isRequired,
}
