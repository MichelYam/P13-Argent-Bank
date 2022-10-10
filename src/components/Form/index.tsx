import React, { useState, useEffect } from 'react'
import "./Style.css";

import { Link } from 'react-router-dom'

interface FormInterface {
    isLogin: boolean,
    title: string
}
export default function Index({ isLogin, title }: FormInterface) {
    const [data, setData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        remember: '',
    })
    const [errors, setErrors] = useState([]);

    const handleChangeValue = (event: React.FormEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [(event.target as HTMLInputElement).id]:
                (event.target as HTMLInputElement).id === "remember" ? !data.remember : (event.target as HTMLInputElement).value,
        });
    };

    // const submitForm = (data) => {

    // }
    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={handleChangeValue} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleChangeValue} />
            </div>
            {
                isLogin ? <>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={handleChangeValue} />
                        <label htmlFor="remember-me"> Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </> : null
            }
            {
                !isLogin ? <>
                    <div className="input-wrapper">
                        <label htmlFor="password">First Name</label>
                        <input type="text" id="firstName" onChange={handleChangeValue} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Last Name</label>
                        <input type="text" id="lastName" onChange={handleChangeValue} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="confirmPassword" onChange={handleChangeValue} />
                    </div>
                    <Link to={'/signin'}>I already have an account</Link>
                </> : null
            }
            <button className="sign-in-button">{title}</button>
        </form >
    )
}
