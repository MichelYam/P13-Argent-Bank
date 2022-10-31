import React from 'react'
import PropTypes from "prop-types";

import styles from './Style.module.css';


interface AccountProps {
    title: string,
    amount: string,
    description: string
}

export const Account: React.FC<AccountProps> = ({ title, amount, description }) => {
    return (
        <section className={styles.account}>
            <div className={styles["account-content-wrapper"]}>
                <h3 className={styles["account-title"]}>{title}</h3>
                <p className={styles["account-amount"]}>{amount}</p>
                <p className={styles["account-amount-description"]}>{description}</p>
            </div>
            <div className={styles["account-content-wrapper cta"]}>
                <button className={styles["transaction-button"]}>View transactions</button>
            </div>
        </section>
    )
}

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
