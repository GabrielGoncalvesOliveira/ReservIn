import React from 'react'
import { SidebarData } from './SidebarData'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

function HeaderDashboard() {
    return (
        <div className="HeaderDashboard">
            <div className="Sidebar">
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                id={window.location.pathname == val.link ? "active" : ""}
                                onClick={() => {
                                    window.location.pathname = val.link;
                                }}
                            >
                                {""}
                                <div>{val.icon}</div> <div>{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <AppBar position="static">
                    <Toolbar className='headerDashboard'>
                        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: "'Merienda One', cursive" }}>
                            ReservIn
                     </Typography>
                        <Button className="menu-button" href="/search" color="inherit" style={{ fontFamily: "'Merienda One', cursive" }}>Pesquisa</Button>
                        <Button className="menu-button" href="/about" color="inherit" style={{ fontFamily: "'Merienda One', cursive" }}>Sobre Nós</Button>
                        <Button className="menu-button" href="/cadastro" color="inherit" style={{ fontFamily: "'Merienda One', cursive" }}>Cadastro</Button>
                        <Button className="menu-button" href="/login" color="inherit" style={{ fontFamily: "'Merienda One', cursive" }}>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>




    );
}

export default HeaderDashboard
