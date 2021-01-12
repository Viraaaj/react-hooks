import React, { useState } from 'react'

export default function FunctionalCounterTwo() {

  // const [incrementCount, setIncrementCount] = useState(0);
  // const [decrementCount, setDecrementCount] = useState(0);
  // const [resetCount, setResetCount] = useState(0);

  const [count, setCount] = useState(0)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount ( prevCount => prevCount + 1 )
    }
  }

  return (
    <div>
      
      {/* <button onClick = {() => setIncrementCount( incrementCount + 1 )} > increment count: {incrementCount} </button>

      <button onClick = {() => setDecrementCount( decrementCount - 1 )} > decrement count: {decrementCount} </button>

      <button onClick = {() => setResetCount( 0 )} > reset count: {resetCount} </button> */}

      <button onClick = {() =>  setCount ( prevCount => prevCount - 1 )} > decrement count </button>

      <button>{count}</button>

      <button onClick = {() =>  setCount ( prevCount => prevCount + 1 )} > increment count </button>

      <button onClick = {() => setCount(0)} > reset count </button>

      <button onClick = {() => incrementFive()} > increment by 5 </button>


    </div>
  )
}
