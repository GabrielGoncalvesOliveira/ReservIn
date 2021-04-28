import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'

const Header = () => {
    return (

    <AppBar position="static">
        <Toolbar className='header'>
            <Typography variant="h6" style={{flexGrow:1, fontFamily: "'Merienda One', cursive"}}>
            ReservIn
            </Typography>
            <Button className="menu-button" href="/search" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Pesquisa</Button>
            <Button className="menu-button" href="/about" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Sobre Nós</Button>
            <Button className="menu-button" href="/cadastro" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Cadastro</Button>
            <Button className="menu-button" href="/login" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Login</Button>
        </Toolbar>
    </AppBar>
    )
}

export default Header
