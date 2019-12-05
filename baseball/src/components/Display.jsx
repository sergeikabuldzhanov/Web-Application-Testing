import React from 'react';

export default function Display(props){
    const {balls, strikes} = props;
    return(
        <div className="display">
            <h2>SCORE</h2>
            <div className="balls">Balls:{balls}</div>
            <div className="strikes">Strikes:{strikes}</div>
        </div>
    );
}