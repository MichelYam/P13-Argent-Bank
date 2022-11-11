import React, { useEffect } from 'react';

import Form from "../../../components/Form/index";

import { Navigate } from 'react-router-dom';
import { selectUser } from '../../../utils/selector';
import { useAppSelector } from '../../../redux/store';

const SignIn = () => {
  const { userToken } = useAppSelector(selectUser);
  useEffect(() => {
    document.title = "Argent Bank - Login Page"
  }, [])
  if (userToken) return <Navigate to="/profile" />;

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <Form isLogin={true} title="Sign In" />
      </section>
    </main>
  )
}

export default SignIn;