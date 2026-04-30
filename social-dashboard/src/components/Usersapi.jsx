import React from "react";

export default function Usersapi(props){
    return(
        <div className="bg-amber-400 rounded-lg p-4">
            <div className= "object-fit: fill; w-40 h-40 overflow-hidden rounded-lg">
                
            </div>
        <div>
        <h2 className="text -xl font-semibold capitalize">Users</h2>
        <p>ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>username: {props.username}</p>
        <p>Email: {props.email}</p>
        </div>
        </div>
    )
}