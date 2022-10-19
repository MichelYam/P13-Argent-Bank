import React, { useState } from 'react';
//redux
import { selectUser } from '../../utils/selector';

import { Account } from '../../components/Account/Index';

//data mock
import { UserAccountMock } from '../../data/UserAccountMock'

import './Style.css';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IDataAPI } from '../../features/user/User';
import { updateUserProfile } from '../../features/user/userActions';

export const User: React.FC = () => {
    const { userInfo }: IDataAPI = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
    })

    let fullName = "";
    if (userInfo !== null) {
        fullName = [userInfo["firstName"], userInfo["lastName"]].join(' ')
    }
    const [editMode, setEditMode] = useState(false);

    const toggleEdit = () => {
        setEditMode(!editMode)
    }

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [event.target.id]: event.target.value
        });
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEditMode(false)
        dispatch(updateUserProfile(input))
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
                            <input type="text" id='firstName' value={input.firstName} onChange={handleChangeValue} />

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' value={input.lastName} onChange={handleChangeValue} />

                            <button className="edit-button" onClick={toggleEdit}>Cancel</button>
                            <button type='submit' className="edit-button" >Submit</button>
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