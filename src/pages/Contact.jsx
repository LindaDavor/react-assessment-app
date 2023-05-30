import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const Contact = () => {
    const [inputs, setInputs] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    )

    const handleFormInputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('data submitted')
        console.log(inputs);
    }
    return (
        <form className='forms' onSubmit={handleSubmit}>
            <TextField name="name" required variant='standard' placeholder='name' onChange={handleFormInputs} />
            <TextField name="email" required variant='standard' type='email' placeholder='email' onChange={handleFormInputs} />
            <TextField
                onChange={handleFormInputs}
                id="outlined-multiline-static"
                label="Message"
                multiline
                name="message"
                rows={4}
                required
                defaultValue="" />
            <Button type='submit' variant='contained'>Submit</Button>
        </form>
    )
}

export default Contact