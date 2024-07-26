import React from 'react'
import {AppBar, Toolbar, Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>Employee App</Typography>&nbsp;&nbsp;&nbsp;
          <Link to='/adds'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>ADD</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/views'><Button variant='contained' color='success' style={{ color: 'black', backgroundColor: 'white' }}>VIEW</Button></Link>&nbsp;&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
  
    </div>
  )
}

export default Navbar