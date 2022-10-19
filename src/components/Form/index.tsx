import React, { useState } from 'react'
import "./Style.css";
import { Link, Navigate } from 'react-router-dom'
import { selectUser } from '../../utils/selector';
import { userLogin, userRegister } from '../../features/user/userActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';


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
        confirmPassword: '',
        remember: false,
    })
    const { loading, error } = useAppSelector(selectUser);
    // const [errors, setErrors] = useState([]);
    const dispatch = useAppDispatch()

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.id]:
                event.target.id === "remember" ? !data.remember : event.target.value,
        });
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isLogin) {
            dispatch(userLogin(data));

        } else {
            if (data.password === data.confirmPassword) {
                dispatch(userRegister(data))
            }
        }
    }

    // if (userToken) return <Navigate to={'/user'} />;
    return (
        <form onSubmit={submitForm}>
            {error && <p>{error}</p>}
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={data.email} onChange={handleChangeValue} required />
            </div>
            {
                isLogin ? <>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={data.password} onChange={handleChangeValue} required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={handleChangeValue} />
                        <label htmlFor="remember-me"> Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <button className="sign-in-button">Sign In</button> */}
                </>
                    :
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
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={data.password} onChange={handleChangeValue} required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" id="confirmPassword" value={data.confirmPassword} onChange={handleChangeValue} />
                        </div>
                        <Link to={'/signin'}>I already have an account</Link>
                    </>
            }
            <button className="sign-in-button">{title}</button>
        </form >
    )
}