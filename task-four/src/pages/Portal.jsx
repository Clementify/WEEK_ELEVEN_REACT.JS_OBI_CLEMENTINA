import React from 'react'
import { useParams  } from 'react-router-dom'

const Portal = () => {
    const {name, number} = useParams()
  return (
    <div>
        Welcome {name} to your Portal. Your number is {number}
        
    </div>
  )
}

export default Portal