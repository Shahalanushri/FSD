import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    var [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err=>console.log(err))
},[])
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{

                      return(
                        <TableRow>
                        <TableCell>{val.ename}</TableCell>
                        <TableCell>{val.eage}</TableCell>
                        <TableCell>{val.eposition}</TableCell>
                        <TableCell>{val.esalary}</TableCell>
                        <TableCell>
                            <Button>Delete
                            </Button>
                                &nbsp;&nbsp;
                            <Button>update
                            </Button>
                        </TableCell>

                    </TableRow>
                      )  
                    })}
                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewdata