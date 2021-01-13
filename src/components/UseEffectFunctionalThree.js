import React, { useState } from 'react'
import UseEffectFunctionalTwo from './UseEffectFunctionalTwo'

function UseEffectFunctionalThree() {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)} > Toggle Display </button>

      { display && <UseEffectFunctionalTwo /> }
    </div>
  )
}

export default UseEffectFunctionalThree