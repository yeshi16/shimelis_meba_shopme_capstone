import React, { useState } from "react";
import Footer from "../page/Footer"

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
        <div  className="backgroundContainer">
            <h1 className="display-6 text-center">Contact us</h1>

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

             

                <div class="mb-3">
                    <label for="Textarea1" class="form-label">Message</label>
                    <textarea
                        placeholder="Type your message"
                        className="form-control"
                        id="Textarea1"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                </div>
                
                <button type="button" className="btn ">Submit</button>
            </form>
           
            <div className="footerPos">
            <Footer />
            </div>
        </div>
    )

}

export default Contact