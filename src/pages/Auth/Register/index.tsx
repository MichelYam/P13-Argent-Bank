import React from 'react';
import { Navigate } from 'react-router-dom';
import Form from '../../../components/Form';
import { useAppSelector } from '../../../redux/store';
import { selectUser } from '../../../utils/selector';

import styles from './Style.module.css';

export default function SignIn() {
  const { userToken } = useAppSelector(selectUser);
  if (userToken) return <Navigate to="/user" />;
  return (
    <main className={`${styles.main} ${styles['bg-dark']}`}>
      <section className={styles["sign-in-content"]}>
        <Form isLogin={false} title="Sign Up" />
      </section>
    </main>
  )
}
