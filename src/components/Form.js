import React,{useReducer,useState} from 'react'


const nameReducer=(state,action)=>{
    if(action.type === "KRUSHNAL")
    {
       return{value : action.val} 
    }
    return state
}

const passwordReducer=(state,action)=>{
    
    if(action.type === "SONI"){
        return{value :action.val}
    }   
    return state
}
const Form = () => {

    const[nameState,dispatchName]=useReducer(nameReducer,{
        value:''

    })
    const[passwordState,dispatchPassword]=useReducer(passwordReducer,{
        value:''
    })
    const[fetchData,setFetch]=useState([])   

    const nameHandler = (event)=>{
        dispatchName({type:"KRUSHNAL",val:event.target.value})
    }
    const passwordHandler=(event)=>{
        dispatchPassword({type:"SONI",val:event.target.value})
    }
    const onSubmit=(event)=>{
        event.preventDefault(); 
        const obj={
            nameState:nameState.value,
            passwordState:passwordState.value,

        }
        setFetch(obj)
       
    }

    return (
        <div>
        
        <form onSubmit={onSubmit}>
        <div>
        <label>Name</label>
        <input type="text" onChange={nameHandler} value={nameState.value} required/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" onChange={passwordHandler} value={passwordState.value} required/>
        </div>
        <button type="submit">Submit</button>
        </form>
    
        <div>{fetchData.nameState}
        {fetchData.passwordState}
        </div>
        
        </div>
      
        
    )
}

export default Form
