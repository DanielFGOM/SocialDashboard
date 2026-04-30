import Usersapi from "./Usersapi";
import { useEffect, useState } from "react";
function Users(){

const[Usersp, setUserapi] = useState(null)
const USERPHOURL = 'https://jsonplaceholder.typicode.com/users'

const fetchusersapi = async (id) =>{
    try {
    const promise = await fetch(`${USERPHOURL}`)
    const data = await promise.json()
    setUserapi(data)

    }catch (error){
    console.error('Error con el fetch')

    }
}
useEffect(() =>{
    fetchusersapi()
},[])
return (
    <>
    <div>

    </div>
    <h1 className="tex4-1 fon-t-semibold text-center my-6">Users</h1>
    <div className="px-4">
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
    </div>
    {Usersp && Usersp.slice(0,10).map((item) => (
        <Usersapi id = {item.id} name ={item.name} username ={item.username} email= { item.email} ></Usersapi>
        
    ))}
    </div>
    </>
)
}

export default Users