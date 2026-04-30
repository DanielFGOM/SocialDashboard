import Postsapi from "./Postsapi";
import { useEffect, useState } from "react";
function Userposts(){

const[Usersp, setUserposts] = useState(null)
const USERPHOURL = 'https://jsonplaceholder.typicode.com/posts'

const fetchuserspos = async (id) =>{
    try {
    const promise = await fetch(`${USERPHOURL}`)
    const data = await promise.json()
    setUserposts(data)

    }catch (error){
    console.error('Error con el fetch')

    }
}
useEffect(() =>{
    fetchuserspos()
},[])
return (
    <>
    <div>

    </div>
    <h1 className="tex4-1 fon-t-semibold text-center my-6">Posts</h1>
    <div className="px-4">
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
    </div>
    {Usersp && Usersp.slice(0,10).map((item) => (
        <Postsapi id = {item.id} title ={item.title} body= { item.body} ></Postsapi>
        
    ))}
    </div>
    </>
)
}

export default Userposts