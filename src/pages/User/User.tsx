import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Account } from '../../components/Account/Account';
import { IData } from '../../features/user/User';
import { getUserDetails, IUser } from '../../features/user/userActions';
import { selectUser } from '../../utils/selector';
import './Style.css';

const accountData = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: '$2,082.79',
        description: "Available Balance"
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: '$10,928.42',
        description: "Available Balance"
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: '$184.30',
        description: "Available Balance"
    }
]

interface IDataUser {
    user: {
        isAuthenticated: boolean,
        loading: boolean,
        userInfo: IUser | null,
        userToken: string | null,
        error: null,
    }
}
export const User: React.FC = () => {

    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })
    const [editMode, setEditMode] = useState(false);

    const toggleEdit = () => {
        setEditMode(!editMode)
    }

    const handleChangeValue = (event: React.FormEvent<HTMLInputElement>) => {
        setName({
            ...name,
            [event.currentTarget.id]: event.currentTarget.name
        });
    }
    const handleSubmit = () => {
        // dispatch(updateUserProfile())
    }
    const test: IData = useSelector(selectUser)
    console.log(test)
    // const fullName = userInfo.firstName.concat(userInfo.lastName)
    return (
        <main className="main bg-dark">
            <div className="header">
                {!editMode ? <>
                    <h1>Welcome back<br />test</h1>
                    <button className="edit-button" onClick={toggleEdit}>Edit Name</button>
                </>
                    :
                    <>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" onChange={handleChangeValue} value={name.firstName} />
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" onChange={handleChangeValue} value={name.lastName} />
                        </form>
                    </>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {
                accountData.map((account) =>
                    <Account key={account.title} title={account.title} amount={account.description} description={account.description} />
                )
            }
        </main>
    )
}