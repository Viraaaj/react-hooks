import React, { useState } from 'react'

function FunctionalCounterThree() {

  const [name, setName] = useState({firstName: '', lastName:''})

  return (
    <form>

      <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
      <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
      <h3> first name: {name.firstName} </h3>
      <h3> last name: {name.lastName}  </h3>

    </form>
  )
}

export default FunctionalCounterThree
