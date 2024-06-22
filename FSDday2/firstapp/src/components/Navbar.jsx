import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<AppBar position='static'>
    <Toolbar>
        <Typography variant='h4'>My App</Typography>&nbsp;&nbsp;
        <Button variant='contained' color='secondary'> <Link to='/'>Login </Link> </Button>&nbsp;&nbsp;
        <Button variant='contained' color='success'> <Link to='/sin'>Signup </Link></Button>&nbsp;&nbsp;
        <Button variant='contained' color='warning'><Link to='/sb'>State</Link></Button>&nbsp;&nbsp;
        <Button variant='contained' color='error'><Link to='/c'>Counter</Link></Button>&nbsp;&nbsp;
        <Button variant='contained' color='secondary'><Link to='/l'>Listmap</Link></Button>&nbsp;&nbsp;
        <Button variant='contained' color='success'><Link to='/a'>Api</Link></Button>&nbsp;&nbsp;
        <Button variant='contained' color='warning'><Link to='/s'>Simple</Link></Button>&nbsp;&nbsp;
        <Button variant='contained' color='warning'><Link to='/ca'>Card</Link></Button>&nbsp;&nbsp;
        </Toolbar>
</AppBar>

    </div>
  )
}

export default Navbar