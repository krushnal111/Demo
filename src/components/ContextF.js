import React from 'react'
import { UserConsumer } from './userContext'

const ContextF = () => {
    return (
        <div>
       <UserConsumer>
       {
           (user)=>{
               return <div>Hello {user}</div>
           }
       }
       </UserConsumer>       
        </div>
    )
}

export default ContextF
