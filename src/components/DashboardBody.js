import React from 'react'
import {List, Divider, ListItem, ListItemIcon, ListItemText, Drawer, Button, AppBar, Toolbar, Typography} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import ReservationTable from './ReservationTable'
import {Link} from 'react-router-dom'


const drawerWidth = 240;

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
                    <Button className="menu-button" href="/cadastro" color="inherit" style={{fontFamily:"'Merienda One', cursive"}}>Cadastro</Button>
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
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                </div>
            </Drawer>
        </div>
        <div>
              <ReservationTable/>
        </div>
        </>
    )
}

export default DashboardBody
