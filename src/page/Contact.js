import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const postContact = async () => {

        const postData = {
            name: name,
            email: email,
            message: message,
        }
        try {
            const response = await fetch('http://localhost:4000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            })

            const data = await response.json()
            console.log(data)

        } catch (e) {
            console.log('Contact message error')
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !email || !message) {
            alert('Add Name, Email and Message')
            return
        }

        console.log(name + " " + email + " " + message)
        await postContact();

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <h1>Contact Us</h1>

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

                <label>Message</label>
                <textarea
                    id='message'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>

                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}

export default Contact