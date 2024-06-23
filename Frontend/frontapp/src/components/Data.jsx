import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const Data = () => {
  return (
    <div>
        <Typography variant="h5">Employee Details</Typography>
        <TextField label="Name" variant="outlined" /> <br></br> <br></br>
        <TextField label="Age" variant="outlined" /><br></br> <br></br>
        <TextField label="Position" variant="outlined"/><br></br> <br></br>
        <TextField label="Salary" variant="outlined" /><br></br> <br></br>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Data