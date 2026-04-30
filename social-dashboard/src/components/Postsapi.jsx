import React from "react";

export default function Postsapi(props){
    return(
        <div className="bg-amber-400 rounded-lg p-4">
            <div className= "object-fit: fill; w-40 h-40 overflow-hidden rounded-lg">
                
            </div>
        <div>
        <h2 className="text -xl font-semibold capitalize">Post</h2>
        <p>ID: {props.id}</p>
        <p>title: {props.title}</p>
        <p>Body: {props.body}</p>
        </div>
        </div>
    )
}