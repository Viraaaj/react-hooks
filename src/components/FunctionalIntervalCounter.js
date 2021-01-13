import React, { useEffect, useState } from 'react'

function FunctionalIntervalCounter() {

  const [count, setCount] = useState(0)

                // method 1 
  useEffect(() => {
    const interval = setInterval(counter, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  const counter = () => {
    setCount(count + 1)
  }



                      // method 2 
  // useEffect(() => {
  //   const interval = setInterval(counter, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  // const counter = () => {
  //   setCount( prevCount => prevCount + 1)
  // }

  return (
    <div>
      <h3>Functional Interval Counter: {count}</h3>
    </div>
  )
}

export default FunctionalIntervalCounter
