import React, { useReducer, useState } from 'react'

const initialstate = {count:0}
const reducer = (state,action)=>{
    console.log(state,action);
    switch(action.type){
        case "DECREMENT":
        return {count:state.count -1}

        case "INCREMENT":
            return {count:state.count + 1}
        default : 
        return state
    }
    //return state;
}

const Counter = () => {
    //const [count,setCount] = useState(0)
    const [state,dispatch] = useReducer(reducer,initialstate);

  return (
    <>
     <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <h2>{state.count}</h2>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
    </>
  )
}

export default Counter