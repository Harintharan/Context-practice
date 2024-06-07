import React, { useContext } from 'react'
import { GrandContext } from './Grandparent'

const Child = ({handleClick}) => {

    const num = useContext(GrandContext)
  return (

    <div className='box'>
        <h3>Child-component</h3>
        <p>{num}</p>
        <button onClick={handleClick}>click</button>
      
    </div>
  )
}

export default Child
