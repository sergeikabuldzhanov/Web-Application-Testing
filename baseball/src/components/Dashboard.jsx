import React from 'react';

export default function Dashboard(props){
    const {setScore} = props;
    return(
        <div className="dasboard">
            <button className="strike" onClick = {e=>setScore('strike')}>Strike</button>
            <button className="ball" onClick = {e=>setScore('ball')}>Ball</button>
            <button className="foul" onClick = {e=>setScore('foul')}>Foul</button>
            <button className="hit" onClick = {e=>setScore('hit')}>Hit</button>
        </div>
    );
}