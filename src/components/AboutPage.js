import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../ReservIn.png'
import restaurantejpg from '../restaurante2.jpg'

const AboutPage = () => {
    return (
        <div>
            <Grid container justify="center"  direction="row" style={{padding:30}}>
                <Grid item sm>
                    <Typography variant="h4" align='center' style={{fontFamily: "'Merienda One', cursive"}}>Sobre nós</Typography>
                    <img alt="reservin-logo" src={logo} height="70%" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '45%', }}></img>
                </Grid>
                <Grid item sm style={{padding:50}}>
                    
                    <Typography variant="h6" style={{textAlign:"justify", fontFamily:"sans-serif"}}>
                    Somos uma equipe de estudantes da Faculdade de Técnologia de Americana (FATEC) e 
                    desenvolvemos o ReservIn sob tutoria do professor Ivan Menerval na matéria de Laboratório
                    de Engenharia de Software.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" direction="row">
                <Grid item sm style={{marginBottom:50}}>
                    <img src={restaurantejpg} alt="logo" height="100%" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%', borderRadius:'2%'}}></img>
                </Grid>
                <Grid item sm style={{paddingBottom:50}}>
                    <Typography variant="h6" style={{fontFamily:"sans-serif"}}>
                        Os estudantes envolvidos nesse projeto são:<br/><br/>
                        Ana Carolina Pizza Scardovelli <br/>
                        Eliana de Oliveira Amorim<br/>
                        Gabriel Cabral Lee <br/>
                        Gabriel Gonçalves de Oliveira<br/>
                        Henrique Barros de Almeida
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutPage
