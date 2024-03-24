import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [countone,setCountOne] = useState(0);
    const [counttwo,setCountTwo] = useState(0);

    function increment(){
        setCountOne(countone + 1);
    }
    function decrement(){
        setCountTwo(counttwo - 1)
    }

    const isEven = useMemo(()=>{
        for(let i=0; i<1000000000; i++){}
        return countone%2===0;
    },[countone])
  return (
    <div>
        <button onClick={increment}>Count One = {countone}</button>{isEven ? "Even":"Odd"} <br/>
        <button onClick={decrement}>Count Two = {counttwo}</button>
    </div>
  )
}

export default UseMemo