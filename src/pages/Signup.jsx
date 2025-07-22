import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import summaryApi from '../common'

const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target

        setData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const dataResponse = await fetch(summaryApi.signup.url,{
                method : summaryApi.signup.method,
                headers : { 
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)    
            })

            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                alert(dataApi.message)
                navigate("/login")
            } else {
                alert(dataApi.message)
            }
        } catch (error) {
            console.log("SOmething went wrong",error)
            alert("failed to signup. Please Try Again")
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.name} name="name" onChange={handleOnChange} placeholder='Enter your name here' />
        <input type="email" value={data.email} name="email" onChange={handleOnChange} placeholder='Enter your email' />
        <input type="password" value={data.password} name="password" onChange={handleOnChange} placeholder='Enter your password' />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
