import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Sample = () => {
    var[x,setx]=useState("welcome")

    const reacthandle=()=>{
        setx("Hello React")
    }
    const angularhandle=()=>{
        setx("Hello Angular")
    }
    const  viewhandle=()=>{
        setx("Hello View")
    }
    useEffect(()=>{
       angularhandle();
    },[])
  return (
    <div>
        <Typography varient='h6'>{x}</Typography>
        <Button variant='contained' onClick={reacthandle}>React</Button>
        <Button variant='contained' onClick={angularhandle}>Angular</Button>
        <Button variant='contained' onClick={viewhandle}>view</Button>

    </div>
  )
}

export default Sample