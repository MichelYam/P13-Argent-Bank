import React from 'react'
import styles from "./Style.module.css";

interface IModal {
    children: React.ReactNode
    onClose: () => void
}
export default function Index({ children, onClose }: IModal) {
    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.modal}>
                <div className={styles.icon}>
                    <i onClick={onClose} className={`fa fa-times`}></i>
                </div>
                {children}
            </div>
        </>
    )
}
