import { AppBar, Button, Link, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#fff', borderBottom: '1px solid #ede7f6', height: 50, marginBottom: '10px' }}>
      <Container maxWidth="lg">
        <Toolbar to="/">
          <Link>
            <img src="https://static-cms-plo.zadn.vn/v3/web/styles/img/logo.png" alt="" height={'30px'} />
          </Link>
          <Button>Tin mới</Button>
          <Button variant="contained">Gửi tin</Button>
          <Button variant="contained">Media</Button>
          <Button variant="contained">Story</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
