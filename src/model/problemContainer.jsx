import React from 'react';
import ImageScroller from './imageScroller.jsx'

export default function ProblemContainer(url, platform, text, name = ""){
    return (
        <li className="problem-container">
            <div className="problem-container-left">
                <ImageScroller />
            </div>
            <div className="problem-container-right">
                <a href={url}>
                    bbbbbbbbbb
                </a>  
            </div>
        </li>
    );
}