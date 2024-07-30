import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Footer from "../page/Footer"

function Contact() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [Password, setPassword] = useState('')



    const postUser = async () => {

        const postData = {
            name: name,
            email: email,
        }
        try {
            const response = await fetch('http://localhost:4000/registerssss', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            })

            const data = await response.json()
            // console.log(data)


        } catch (e) {
            console.log('Error registering')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !name) {
            alert('Add Name and Email ')
            return
        }

        // console.log(email + " " + name);
        await postUser();

        setName('')
        setEmail('')

        // navigage to login page
        navigate('/products')
    }

    return (
        <div className="backgroundContainer">
            <h1 className="display-6 text-center">Register</h1>
            {/* <h1>Register</h1> */}

            <form className="mx-auto p-2" style={{ width: "200px;" }}>

                <div class="mb-3">
                    <label for="Input1" class="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input1"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div class="mb-3">
                    <label for="Input2" class="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input2"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="button" className="btn " onClick={handleSubmit}>Register</button>

            </form>

            {/* <p>Already Registered</p> */}
            {/* <Link to='/products'>
                Login
            </Link> */}
            {/* <br /><br /> */}
            <div className="footerPos">
            <Footer />
            </div>
           
        </div>
    )

}

export default Contact