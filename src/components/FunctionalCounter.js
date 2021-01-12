import React, { useState } from 'react'

export default function FunctionalCounter() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)} > Functional count: {count} </button>
    </div>
  )
}
