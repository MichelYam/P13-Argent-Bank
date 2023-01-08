import React from 'react';

import Form from "../../../components/Form/index";

import { Navigate } from 'react-router-dom';
import { selectUser } from '../../../utils/selector';
import { useAppSelector } from '../../../redux/test/store';

const SignIn = () => {
  const { userToken } = useAppSelector(selectUser);
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