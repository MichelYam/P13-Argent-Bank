import React, { useState } from 'react'
import "./Style.css";
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from '../../utils/selector';
import { userLogin } from '../../features/user/userActions';
import { useAppDispatch } from '../../redux/store';


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
        remember: false,
    })
    const { userToken } = useSelector(selectUser);
    // const [errors, setErrors] = useState([]);
    const dispatch = useAppDispatch()

    const handleChangeValue = (event: React.FormEvent<HTMLInputElement>): void => {
        setData({
            ...data,
            [event.currentTarget.id]:
                event.currentTarget.id === "remember" ? !data.remember : event.currentTarget.value,
        });
    };

    const submitFormLogin = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(userLogin(data));
    }
    const submitFormRegister = (event: React.SyntheticEvent) => {
        event.preventDefault();
        // dispatch(userRegister(data))
    }
    if (userToken) return <Navigate to={'/user'} />;
    return (
        <form onSubmit={isLogin ? submitFormLogin : submitFormRegister}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={data.email} onChange={handleChangeValue} required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={data.password} onChange={handleChangeValue} required />
            </div>
            {
                isLogin ? <>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={handleChangeValue} />
                        <label htmlFor="remember-me"> Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </> :
                    <>
                        <div className="input-wrapper">
                            <label htmlFor="password">First Name</label>
                            <input type="text" id="firstName" value={data.firstName} onChange={handleChangeValue} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Last Name</label>
                            <input type="text" id="lastName" value={data.lastName} onChange={handleChangeValue} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" id="confirmPassword" value={data.email} onChange={handleChangeValue} />
                        </div>
                        <Link to={'/signin'}>I already have an account</Link>
                    </>
            }
            <button className="sign-in-button">{title}</button>
        </form >
    )
}