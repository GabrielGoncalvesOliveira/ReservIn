import { Button, Grid, Input, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handleLogin = () =>{

    }

    const handleCadastro = () => {

    }

    return (
        <Grid container justify="center" alignItems="center">
            <Paper className="login-box">
                <form autoComplete >
                    <Grid container justify="center" alignItems="center">
                        <Typography style={{margin:20}} variant="h4">LOGO</Typography>
                    </Grid>
                    <Grid item>
                        <TextField autoComplete="on" fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField style={{marginTop:20}} fullWidth label="Senha"type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Grid>
                    <Grid style={{marginTop:20}} container justify="center" alignItems="center" alignContent="center">
                        <Button size="medium" style={{backgroundColor:"#5A3B23", color:"#FFF", margin:20, padding:10}} onClick={handleCadastro()}>Cadastro</Button>
                        <Button size="medium" style={{backgroundColor:"#5A3B23", color:"#FFF", margin:20, padding:10}} onClick={handleLogin()}>Login</Button>
                    </Grid>
                </form>
            </Paper>
        </Grid>
            
        
        
    )
}

export default Login
