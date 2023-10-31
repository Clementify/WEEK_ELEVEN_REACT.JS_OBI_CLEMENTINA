import React from 'react'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isSubmitted,setIsSubmitted] = useState(false)

  const handleEmail = (e)=>{
    setEmail(e.target.value)
}
const handlePassword = (e)=>{
    setPassword(e.target.value)

}

const handleSubmit =(e)=>{
  e.preventDefault()
  setIsSubmitted(true)
}
  return (
    <>
      {isSubmitted?
        <div>
          <h1>your email is {email}</h1>
          <p>your password is {password}</p>
        </div>
        :
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" className="email" onChange={handleEmail}/>

          <label htmlFor="password">Password:</label>
          <input type="password" className="password" onChange={handlePassword}/>
          <button>Submit</button>
        </form>
        
      }
    </>
  )
}

export default Login