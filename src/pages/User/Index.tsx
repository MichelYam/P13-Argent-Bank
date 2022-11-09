import React, { useState } from 'react';
//redux
import { selectUser } from '../../utils/selector';

import { Account } from '../../components/Account/Index';

//data mock
import { UserAccountMock } from '../../data/DataMock'

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IDataAPI } from '../../features/user/User';
import { updateUserProfile } from '../../features/user/userActions';

import Modal from "../../components/Modal/Index"

export const User: React.FC = () => {

    const { userInfo }: IDataAPI = useAppSelector(selectUser)
    let fullName = "";
    if (userInfo !== null) {
        fullName = [userInfo["firstName"], userInfo["lastName"]].join(' ')
    }
    const dispatch = useAppDispatch()
    const [input, setInput] = useState({
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ')[1],
    })

    const [editMode, setEditMode] = useState(false);
    // const [isOpen, setIsOpen] = useState(false)

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
                <h1>Welcome back<br />{fullName}</h1>
                {!editMode ?
                    <>
                        <button className='edit-button' onClick={toggleEdit}>Edit Name</button>
                    </>
                    :
                    <>
                        <Modal onClose={toggleEdit}>
                            <form onSubmit={handleSubmit}>
                                <div className="control-label">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id='firstName' value={input.firstName} onChange={handleChangeValue} />
                                </div>
                                <div className="control-label">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id='lastName' value={input.lastName} onChange={handleChangeValue} />
                                </div>

                                <button className="edit-button" onClick={toggleEdit}>Cancel</button>
                                <button type='submit' className="edit-button" >Submit</button>
                            </form>
                        </Modal>
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