import React from 'react';
import './css/button.css'

export const NavBarButton = props => {
    const { onClick = () => {}, placeholder, children } = props;

    return (
        <li className="nav-bar-button" onClick={onClick}>
            <div>{children || placeholder}</div>
        </li>
    );
}


export const FormButton = props => {
    const { onClick = () => {}, placeholder, children,type } = props;

    return <div className={`${type} form-button`} onClick={onClick}>
                <div className="button-text">{children || placeholder}</div>
            </div>
}