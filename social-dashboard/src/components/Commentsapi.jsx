import React from "react";

export default function Commentsapi(props){
    return(
        <div className="bg-amber-400 rounded-lg p-4">
            <div className= "object-fit: fill; w-40 h-40 overflow-hidden rounded-lg">
                
            </div>
        <div>
        <h2 className="text -xl font-semibold capitalize">COMMENTS</h2>
        <p>ID: {props.id}</p>
        <p>name: {props.name}</p>
        <p>email: {props.email}</p>        
        <p>Body: {props.body}</p>
        </div>
        </div>
    )
}