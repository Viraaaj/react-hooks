import React, { useState } from 'react'

function FunctionalCounterFour() {

  const [items, setItems] = useState([])

  const addItem = ()  => {
    setItems( [...items, {
      id: items.value,
      value: Math.floor(Math.random() * 10 ) + 1
    }] )
  }

  return (
    <div>

      <button onClick={() => addItem()} > Add items </button>

      <ul>
        {items.map(item => (
          <li key={item.id}> {item.value} </li>
        ))}
      </ul>
      
    </div>
  )
}

export default FunctionalCounterFour
