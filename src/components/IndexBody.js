import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import SearchBar from './SearchBar'
import restaurante1 from'../restaurante1.jpg';
import logo from '../ReservIn.png';

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
                <img alt="restaurant" src={restaurante1} style={{borderRadius:8, height:'auto', width:'auto'}}></img>
                </Grid>
                <Grid sm item style={{margin:20}}>
                    
                        <Typography variant="h4" style={{fontFamily:"'Merienda One', cursive"}}>O Melhor Para o seu Negócio</Typography>
                        <Typography variant="h6" style={{marginTop:20, textAlign:'justify'}}>
                            O ReservIn&copy; é um sistema inteligente de gerenciamento de reservas que auxilia tanto você cliente, que deseja realizar reservas
                            em restaurantes de qualidade de forma simples, como também ajuda os estabelecimentos parceiros a manter controle de todas as reservas
                            e seu andamento através do sistema, aumentando a produtividade e auxiliando na rapidez de seu serviço.
                        </Typography>
                        <Grid container alignContent="center" justify="center">
                        <img src={logo} width="150" height="150"></img>
                        </Grid>
                        
                    
                </Grid>
            </Grid>
            <Grid container>
                
            </Grid>
        </div>
        
    )
}

export default IndexBody
