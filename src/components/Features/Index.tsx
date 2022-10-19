import React from 'react';
import './Style.css'
interface FeatureProps {
    title: string,
    image: string,
    children: React.ReactNode
}

export const Feature: React.FC<FeatureProps> = (props) => {
    return (
        <div className="feature-item">
            <img src={props.image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>
                {props.children}
            </p>
        </div>
    )
}
