import { useState } from "react"
import {useNavigate} from "react-router-dom"
import summaryApi from "../common"

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target

        setData((preve) => ({
            ...preve,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const dataResponse = await fetch(summaryApi.signin.url, {
                method : summaryApi.signin.method,
                // credentials : "include",
                headers : {
                    "Content-Type" : "application/json", 
                },
                body : JSON.stringify(data)
            })

            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                alert(dataApi.message)
                navigate("/")
            } else {
                alert(dataApi.message)
            }
        } catch (error) {
            alert("Something went wrong",error)
            console.log("Something went wrong")
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={data.email} onChange={handleOnChange} placeholder='Enter your email' />
        <input type="password" name="password" value={data.password} onChange={handleOnChange} placeholder='Enter your password' />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login
