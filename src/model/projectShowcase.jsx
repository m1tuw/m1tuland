import React from 'react';
import cetrisCard from '../assets/cards/cetris_card.jpg';

export default function ShowcaseContainer(){
    return (
        <div className="showcase-container">    
            <ShowcaseFrame title="mitudaw" description="daw coded in c"/>
            <ShowcaseFrame title="mitumallador" description="academic track editor"/>
            <ShowcaseFrame title="cetris" description="tetris clone in c++"/>
        </div>
    );
}

export function ShowcaseFrame({title, url, description}){
    return <div className="showcase-frame">
        <div className="showcase-inner">
            <div className="showcase-front">
                <img src={cetrisCard} className="card-image"></img>
            </div>
            <div className="showcase-back">
                {title} <br></br>
                {description}
            </div>
        </div>
    </div>
}