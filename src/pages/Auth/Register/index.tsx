import React from 'react';
import Form from '../../../components/Form';
import './Style.css';

export default function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign Up</h1>
        <Form isLogin={false} title="Sign Up" />
      </section>
    </main>
  )
}
