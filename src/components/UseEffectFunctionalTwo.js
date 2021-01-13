import React, { useEffect, useState } from 'react'

function UseEffectFunctionalTwo() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Event Functional')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('UseEffect mouse')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Component cleanUp');
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      Functional X - {x} Y - {y}
    </div>
  )
}

export default UseEffectFunctionalTwo
