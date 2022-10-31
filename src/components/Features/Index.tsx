import React from 'react';
import PropTypes from 'prop-types'
import styles from './Style.module.css'
interface FeatureProps {
    title: string,
    icon: string,
    image: string,
    children: React.ReactNode
}

export const Feature: React.FC<FeatureProps> = ({ image, icon, title, children }) => {
    return (
        <div className={styles["feature-item"]}>
            <img src={`./img/${image}`} alt={`${icon} icon`} className={styles["feature-icon"]} />
            <h3 className={styles["feature-item-title"]}>{title}</h3>
            <p>
                {children}
            </p>
        </div>
    )
}

Feature.propTypes = {
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}