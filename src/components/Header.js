import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'

const Header = () => {
    return (

    <AppBar position="static">
        <Toolbar className='header'>
            <Typography  variant="h6" style={{flexGrow:1}}>
            ReservIn
            </Typography>
            <Button className="menu-button" href="/search" color="inherit">Pesquisa</Button>
            <Button className="menu-button" href="/about" color="inherit">Sobre Nós</Button>
            <Button className="menu-button" href="/login" color="inherit">Login/Cadastro</Button>
        </Toolbar>
    </AppBar>
    )
}

export default Header
