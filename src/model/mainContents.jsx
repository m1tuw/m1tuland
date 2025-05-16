import React from 'react';
import ShowcaseContainer from './projectShowcase.jsx';
import ProblemShowcase from './problemShowcase.jsx';

export default function MainContent(){
    return (
        <div className="main-content center-content"> 
            <div className="title"> welcome to the mituverse! </div>
            <div>
                this is where i showcase my <span className="fire-text"> silly little projects </span>
                to the world and also share a (really) small fraction of my thoughts.
            </div>
            <ShowcaseContainer />
            <button className="white-button"> shuffle cards </button>
        </div>
    );
}

export function LeftContent(){
    return (
        <div className="main-content left-content"> goated problems
            <ProblemShowcase />
        </div>
    );
}

export function RightContent(){
    return (
        <div className="main-content right-content"> ipsum lorem </div>
    );
}