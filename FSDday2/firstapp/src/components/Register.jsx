import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <Typography variant='h4'>Login</Typography>
        <TextField label="username" variant="outlined" /><br></br><br></br>
        <TextField label="password" variant="outlined" /><br></br><br></br>
        <Button variant="contained">Submit</Button><br></br><br></br>
    </div>
  )
}

export default Register