import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'
import SearchBar from './SearchBar'

const IndexBody = () => {
    return (
        <div>
            <Grid container alignItems="center" justify="center">
                <Grid lg item alignItems="center" style={{margin:150}} >
                    <SearchBar/>
                </Grid>
            </Grid>
            <Grid container style={{backgroundColor:"#3C281E", color:"#ffe"}}>
                <Grid sm item style={{margin:20}}>
                    <Paper style={{padding:10}}>
                        <Typography variant="h6">IMAGEM</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam velit est, lobortis sed pretium sit amet, mattis vel tortor. Vestibulum 
                        viverra lorem vitae euismod sollicitudin. Proin purus leo, ultricies ut maximus at, 
                        rutrum quis eros. Praesent tempor elit neque, in posuere dui pharetra in. Donec gravida 
                        tortor eget lorem malesuada, id tempor arcu vehicula.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid sm item style={{margin:20}}>
                    <Paper style={{padding:10}}>
                        <Typography variant="h6">TEXTO</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam velit est, lobortis sed pretium sit amet, mattis vel tortor. Vestibulum 
                        viverra lorem vitae euismod sollicitudin. Proin purus leo, ultricies ut maximus at, 
                        rutrum quis eros. Praesent tempor elit neque, in posuere dui pharetra in. Donec gravida 
                        tortor eget lorem malesuada, id tempor arcu vehicula.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default IndexBody
