import React from 'react';
import cetrisCard from '../assets/cards/cetris_card.jpg';
import malladorCard from '../assets/cards/mallador_card.png';
import mitudawCard from '../assets/cards/mitudaw_card.png';

export default function ShowcaseContainer(){
    return (
        <div className="showcase-container">    
            <ShowcaseFrame image = {mitudawCard} url = "https://github.com/m1tuw/mitudaw" title="mitudaw" description="daw coded in c"/>
            <ShowcaseFrame image = {malladorCard} url = "m1tuw.github.io" title="mitumallador" description="academic track editor"/>
            <ShowcaseFrame image = {cetrisCard} url = "https://github.com/m1tuw/cetris" title="cetris" description="tetris clone in c++"/>
        </div>
    );
}

export function ShowcaseFrame({title, url, description, image}){
    return <div className="showcase-frame">
        <div className="showcase-inner">
            <div className="showcase-front">
                <img src={image} className="card-image"></img>
            </div>
            <div className="showcase-back">
                <a href={url} target="blank">{title}</a> <br></br>
                {description}
            </div>
        </div>
    </div>
}