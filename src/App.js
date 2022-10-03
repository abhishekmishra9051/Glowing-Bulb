import React, { useState } from 'react'
import On from './assets/images/off.png'
import Off from './assets/images/on.png'

function App() {

  const [toggle, setToggle] = useState(false)

  const toggleButton = () =>{
    setToggle(!toggle)
  }

  return (
    <div align='center' >

      <img src={toggle ? On :Off}  height ={400}  alt=''/>
      <button onClick={toggleButton}>{toggle?'On':'Off'}</button>

    </div>
  )
}

export default App
