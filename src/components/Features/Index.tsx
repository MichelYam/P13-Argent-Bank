import React from 'react';
import PropTypes from 'prop-types'
import './Style.css'
interface FeatureProps {
    title: string,
    icon: string,
    image: string,
    children: React.ReactNode
}

export const Feature: React.FC<FeatureProps> = ({ image, icon, title, children }) => {
    return (
        <div className="feature-item">
            <img src={`./img/${image}`} alt={`${icon} icon`} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
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