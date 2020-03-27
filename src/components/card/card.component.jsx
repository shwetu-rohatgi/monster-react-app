/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './card.style.css';

export const Card = (props) => {
    return(
        <div className="card-container">
            <img alt="monster" src={'https://robohash.org/${props.monster.id}?set=set2&size=180x180'}/>
            <h6>{ props.monster.name }</h6>
            <p className="email-style">{ props.monster.email }</p>
        </div>
    )
}