import React, { useState } from "react";

function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email + " " + message)

        if(!email || !message){
            alert('Add Email and Message')
        }
    }

    return (
        <div>
            <h1>Contact Us</h1>

            <form>
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