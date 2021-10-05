import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const[resourceType,setResourceType]=useState('')

console.log("render")
useEffect(() => {
    console.log('Button Type Changed')
}, [resourceType])
return (
    <div>
    <button onClick={()=>setResourceType('POSTS')}>Posts</button>
    <button onClick={()=>setResourceType('USERS')}>Users</button>
    <button onClick={()=>{setResourceType('COMMENTS')}}>Comments</button>
     <div>{resourceType}</div>   
    </div>
)
}

export default UseEffect