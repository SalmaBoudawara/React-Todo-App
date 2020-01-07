import React from 'react'
import './Ligne.css'
export default function Ligne(props) {
    return (
    <div className="ligne">
       
                <button onClick={()=>props.chan(props.index)} >{props.isComplete ? 'undo' : 'Complete'}</button>
                <button onClick={()=> props.delete(props.index)}>Delete</button>
                <p className={props.isComplete ?"phras" :"p"}>{props.userText}</p>
            </div>
       
    )
}
// 