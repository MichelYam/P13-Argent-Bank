import React from 'react';
import "./Style.css";

import Form from "../../../components/Form/index";

const SignIn = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <Form isLogin={true} title="Sign In" />
      </section>
    </main>
  )
}

export default SignIn;