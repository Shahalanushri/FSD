import { TextField,Button } from '@mui/material'
import React,{ useState } from 'react'

const Listmap = () => {
  var [inp,setInp]=useState(["ICTAK"])
  var [data,setdata]=useState("")

  const inputhandle=(e)=>{
    setdata(e.target.value)
  }
  const add=()=>{
    setInp([...inp,data])
    console.log(inp)
    setdata("")
  }
  return (
    <div><br></br>
        <TextField variant='outlined' label="Enter your name" onChange={inputhandle} value={data}></TextField><br></br>&nbsp;&nbsp;
        <Button variant='contained' onClick={add}>submit</Button><br></br>
        <ul>
           
          {inp.map((v,i)=>{
            return <li>{v}</li>
          })}
        </ul>
    </div>
  )
}

export default Listmap