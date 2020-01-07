import React from 'react'
import Ligne from '../afficheLigne/Ligne'
import './List.css'
export default function List(props) {
    return (
        
             <div className="affichage">
            <p className="phrase">let's get some work done!</p>
            <div className="list">
             {props.list.map((el, i) => {
            return <Ligne key={i} userText={el.text} isComplete={el.isComplete} delete={props.remove } index={i} chan={props.change}/>;
             })}
      </div>
        </div>

    )
}
