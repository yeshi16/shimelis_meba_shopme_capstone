import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [Password, setPassword] = useState('')

   

    const postUser = async () => {

        const postData = {
            name: name,
            email: email,
        }
        try{
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(postData)
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

        console.log(email + " " + name);
        await postUser();

        setName('')
        setEmail('')
        
    }

    return (
        <div>
            <h1>Register</h1>

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
        </div>
    )

}

export default Contact