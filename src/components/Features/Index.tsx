import React from 'react';
import PropTypes from 'prop-types'
import './Style.css'
interface FeatureProps {
    title: string,
    image: string,
    children: React.ReactNode
}

export const Feature: React.FC<FeatureProps> = ({ image, title, children }) => {
    return (
        <div className="feature-item">
            <img src={image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {children}
            </p>
        </div>
    )
}

Feature.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}