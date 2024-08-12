import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   

    const getUser = async () => {
       
        const userData = {
            name: name,
            email: email,
            password: password
          
        }
        try{
            const response = await fetch('http://localhost:4000/login', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  
            })
            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json()
            console.log(data)
           

        } catch (e) {
            console.log('Error registering')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!email || !name || !password){
            alert('Fill all fields')
            return
        }

        // console.log(email + " " + name);
        await getUser();

        setName('')
        setEmail('')
        setPassword('')
        
         // navigage to login page
         navigate('/products')
    }

    

    return (
        <div className="backgroundContainer">
            <h1 className="display-6 text-center">Login</h1>

            <form className="mx-auto p-2" >

                <div className="mb-3">
                    <label htmlFor="Input1" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input1"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Input2" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input2"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Input3" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="Input3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="button" className="btn " onClick={handleSubmit}>Register</button>

            </form>

            <p className="text-center">Didn't Register</p>
            <Link to='/register' className="linkCenter2">
                Register
            </Link>
        </div>
    )

}

export default Login