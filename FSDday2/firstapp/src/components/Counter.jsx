import React,{useState} from 'react'
import { Button, Typography } from '@mui/material'


const Counter = () => {
    var [count,setCount]=useState(0)
       
    const addhandler=()=>{
        setCount(count+1)
    }
    const subhandler=()=>{
        setCount(count-1)
    }
        
    
    
  return (
    <div>
        <Typography varient='h4'>count:{count}</Typography><br></br><br></br>
        <Button variant='contained'onClick={addhandler}>+</Button>&nbsp;&nbsp;
        <Button variant='contained'onClick={subhandler}>-</Button><br></br>
    </div>
  )
}

export default Counter