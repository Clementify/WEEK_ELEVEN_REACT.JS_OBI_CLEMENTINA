import React from 'react'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
​
const Home = () => {
  const navigate= useNavigate()
  const nameRef = useRef('')
  const numberRef = useRef(0)
​
  const handleForm = (e) => {
    e.preventDefault()
    const path = `/dashboard/${nameRef.current.value}/${numberRef.current.value}`
    navigate(path)
  }
  const handleLogin=()=>navigate('/login')
  return (
    <div>
        <h1>Welcome to My Home Page</h1>
​
        <button onClick={handleLogin}>
          Login here
        </button>
​
​
        <form onSubmit={handleForm}>
          <input type="text" placeholder='enter name' ref={nameRef}/>
          <input type="number" placeholder='enter phone' ref={numberRef}/>
          <button>Submit</button>
        </form>
    </div>
  )
}
​
export default Home