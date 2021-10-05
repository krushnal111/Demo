import React,{useReducer} from 'react'

const reducer = (state,action)=>{
    if(action.val==='increment'){
        return state+1
    }
    if(action.val==='decrement' ){
        return state-1
    }
    if(action.val==='reset'){
        return 0
    }
        return state
    }

function UseReducer() {
    const[count,dispatch]=useReducer(reducer,0)
    return (
        <div>
        <div>Count <b>{count}</b></div>
        <button onClick={()=>dispatch({val:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({val:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({val:'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducer