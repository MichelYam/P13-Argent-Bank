import React from 'react';

import Form from "../../../components/Form/index";

import { Navigate, useNavigate } from 'react-router-dom';
import { selectUser } from '../../../utils/selector';
import { useAppSelector } from '../../../redux/store';

const SignIn = () => {
  const { userToken } = useAppSelector(selectUser);
  console.log("token", userToken)
  if (userToken) return <Navigate to="/user" />;
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <Form isLogin={true} title="Sign In" />
      </section>
    </main>
  )
}

export default SignIn;