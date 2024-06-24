import React from 'react'
import { AppBar,Button,Stack,Toolbar,Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            
        <Typography variant='h6' component='div' sx={{flexGrow: 1}} align='left'> 
             BLOG APP</Typography>&nbsp;&nbsp; 
             <Stack direction='row' spacing={2}> 
        <Button variant='contained' color='inherit'> <Link to='/'>HOME </Link> </Button>&nbsp;&nbsp;
        <Button variant='contained' color='inherit'> <Link to='/a'>ADD BLOG </Link></Button>&nbsp;&nbsp;
        </Stack>
        </Toolbar>
      </AppBar>
    
    </div>
  )
}

export default Navbar
