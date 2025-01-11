import React from 'react';

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
                {title} <br></br>
                {description}
            </div>
            <div className="showcase-back">
                insert image here
            </div>
        </div>
    </div>
}