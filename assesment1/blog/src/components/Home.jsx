import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import axios from 'axios'
import react,{ useEffect, useState } from 'react'

const Home = ()=> {
    var[user,setUser]=useState([])
     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setUser(response.data)
        })
     },[])
  return (
    <div>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                        <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                           
                        </TableRow>
                        )
                        })}
                    
                </TableBody>
            </Table>
        </TableContainer>


    </div>
  )
}

export default Home