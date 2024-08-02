import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [Password, setPassword] = useState('')

   

    const getUser = async () => {
       
        const userData = {
            name: name,
            email: email,
        }
        try{
            const response = await fetch('http://localhost:4000/loginsss', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(userData)
            })

            const data = await response.json()
            console.log(data)
           

        } catch (e) {
            console.log('Error registering')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!email || !name){
            alert('Add Name and Email ')
            return
        }

        // console.log(email + " " + name);
        await getUser();

        setName('')
        setEmail('')
        
         // navigage to login page
         navigate('/products')
    }

    return (
        <div>
            <h1>Login</h1>

            <form>
            <label>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>

            <p>Didn't Register</p>
            <Link to='/register'>
                Register
            </Link>
        </div>
    )

}

export default Login