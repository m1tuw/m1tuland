import React from 'react';
import logo from '../assets/logo.svg'
import left_deco from '../assets/textures/leftwall.png'
import right_deco from '../assets/textures/rightwall.png'

export default function HeaderButton({text, redirectLink}) {
    return (
        <a href={redirectLink}>
            <div className="header-button">
                {text}
            </div>
        </a>
    );
}

export function HeaderLogo(){
    return (
        <img src="logo.svg" width="70" height="70"></img>
    );
}

export function LeftHeaderDeco(){
    return (
        <img src={left_deco} className="header-deco-left"></img>
    );
}

export function RightHeaderDeco(){
    return (
        <img src={right_deco} className="header-deco-right"></img>
    );
}