import Commentsapi from "./Commentsapi";
import { useEffect, useState } from "react";
function Usercoments(){

const[Usersp, setUsercoments] = useState(null)
const USERPHOURL = 'https://jsonplaceholder.typicode.com/posts/1/comments'

const fetchusercoments = async (id) =>{
    try {
    const promise = await fetch(`${USERPHOURL}`)
    const data = await promise.json()
    setUsercoments(data)

    }catch (error){
    console.error('Error con el fetch')

    }
}
useEffect(() =>{
    fetchusercoments()
},[])
return (
    <>
    <div>

    </div>
    <h1 className="tex4-1 fon-t-semibold text-center my-6">Comments</h1>
    <div className="px-4">
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
    </div>
    {Usersp && Usersp.slice(0,10).map((item) => (
        <Comentsapi id = {item.id} name ={item.name} email ={item.email} body= { item.body} ></Comentsapi>
        
    ))}
    </div>
    </>
)
}

export default Usercoments