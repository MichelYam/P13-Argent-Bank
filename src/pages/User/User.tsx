import React, { useState } from 'react';
//redux
import { selectUser } from '../../utils/selector';

import { Account } from '../../components/Account/Account';

//data mock
import { UserAccountMock } from '../../data/UserAccountMock'

import './Style.css';
import { useAppSelector } from '../../redux/store';
import { IDataAPI } from '../../features/user/User';

export const User: React.FC = () => {
    const { userInfo }: IDataAPI = useAppSelector(selectUser)
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })

    let fullName = "";
    if (userInfo !== null) {
        fullName = [userInfo["firstName"], userInfo["lastName"]].join(' ')
    }
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
    return (
        <main className="main bg-dark">
            <div className="header">
                {!editMode ? <>
                    <h1>Welcome back<br />{fullName}</h1>
                    <button className="edit-button" onClick={toggleEdit}>Edit Name</button>
                </>
                    :
                    <>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" onChange={handleChangeValue} value={name.firstName} />
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" onChange={handleChangeValue} value={name.lastName} />
                            <button className="edit-button" onClick={toggleEdit}>Cancel</button>
                            <button className="edit-button" >Submit</button>
                        </form>
                    </>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {
                UserAccountMock.map((account) =>
                    <Account key={account.title} title={account.title} amount={account.description} description={account.description} />
                )
            }
        </main>
    )
}