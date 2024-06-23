import { AppBar, Button, Toolbar, Typography, } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
         <AppBar position="static">
        <Toolbar>
            <Typography variant='h4'>Employee</Typography>&nbsp;&nbsp;
            <Button variant='contained' color='secondary'> <Link to='/'>Add </Link> </Button>&nbsp;&nbsp;
            <Button variant='contained' color='warning'> <Link to='v'>View </Link></Button>&nbsp;&nbsp;
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default navbar