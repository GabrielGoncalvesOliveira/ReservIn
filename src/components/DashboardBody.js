import React from 'react'
import {List, Divider, ListItem, ListItemIcon, ListItemText, Drawer, Button, AppBar, Toolbar, Typography} from '@material-ui/core'

import AccessTimeIcon from '@material-ui/icons/AccessTime'; //a aprovar
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; //aprovada
import TodayIcon from '@material-ui/icons/Today'; //em andamento
import EventAvailableIcon from '@material-ui/icons/EventAvailable'; // concluida
import EventBusyIcon from '@material-ui/icons/EventBusy'; //cancelada

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import ReservationTable from './ReservationTable'
import {Link, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'


const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: 64,
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const loadReservasCanceladas = () =>{

}

const loadReservasAndamento = () =>{

}

const loadReservasAprovadas = () =>{

}

const loadReservasCocluidas = () =>{

}

const loadReservasNaoAprovadas = () =>{

}

const DashboardBody = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static" className={classes.appBar}>
                <Toolbar className='header'>
                    <Typography variant="h6" style={{flexGrow:1, fontFamily: "'Merienda One', cursive"}}>
                    ReservIn
                    </Typography>
                    <Button className="menu-button" href="/search" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Pesquisa</Button>
                    <Button className="menu-button" href="/about" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Sobre Nós</Button>
                    <Button className="menu-button" href="/register" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Cadastro</Button>
                    <Button to="/login" className="menu-button" href="/login" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Login</Button>
                </Toolbar>
            </AppBar>
        <div className={classes.root}>
            
            <CssBaseline /> 
            <Drawer
                variant="permanent"
                anchor="left"
                className={classes.drawer}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.drawerContainer}>
                <Divider />

                <List>
                
                    <ListItem component="a" key="Reservas a Aprovar" href="/dashboard/reservas-a-aprovar">
                    <ListItemIcon><AccessTimeIcon/></ListItemIcon>
                    <ListItemText primary="Reservas a Aprovar" />
                    </ListItem>
                    <Divider/>
                    <ListItem component="a" key="Reservas Aprovadas" href="/dashboard/reservas-aprovadas">
                    <ListItemIcon><CheckCircleIcon/></ListItemIcon>
                    <ListItemText primary="Reservas Aprovadas" />
                    </ListItem>
                    <Divider/>
                    <ListItem component="a" key="Reservas em Andamento" href="/dashboard/reservas-em-andamento">
                    <ListItemIcon><TodayIcon/></ListItemIcon>
                    <ListItemText primary="Reservas em Andamento"/>
                    </ListItem>
                    <Divider/>
                    <ListItem component="a" key="Reservas Concluídas" href="/dashboard/reservas-concluidas">
                    <ListItemIcon><EventAvailableIcon/></ListItemIcon>
                    <ListItemText primary="Reservas Concluídas" />
                    </ListItem>
                    <Divider/>
                    <ListItem component="a" key="Reservas Canceladas" href="/dashboard/reservas-canceladas">
                    <ListItemIcon><EventBusyIcon/></ListItemIcon>
                    <ListItemText primary="Reservas Canceladas" />
                    </ListItem>
                    <Divider/>
                </List>
                </div>
            </Drawer>
        </div>
        </>
    )
}

export default DashboardBody
