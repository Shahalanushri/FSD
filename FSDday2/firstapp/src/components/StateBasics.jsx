import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname]=useState("Igha")
    var[val,setval]=useState()

const submithandler=()=>{
    setFname(val)
}
const handleInput=(e)=>{
     console.log(e.target.value)
   setval(e.target.value)
 }
  return (
    <div>
        <Typography varient='h4'>Welcome {fname}</Typography><br></br><br></br>
        
        <TextField varient="outlined" label="type your name" onChange={handleInput}/><br></br><br></br>
        <Button variant='contained'onClick={submithandler}>submit</Button>
    </div>
  )
}

export default StateBasics