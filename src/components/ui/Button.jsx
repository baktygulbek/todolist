import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button id={props.id} className={`${classes.button}${props.className}`} onClick={props.onClick} type={props.type || 'button'}>{props.children}</button>
    );
};

export default Button;