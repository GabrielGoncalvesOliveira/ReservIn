import React, {useState} from 'react'
import {Grid, Typography, Paper, TextField, Button} from '@material-ui/core'

const Register = () => {

    //dados estabelecimento
    const[emailEstabelecimento, setEmailEstabelecimento] = useState()
    const[cnpj, setCnpj] = useState()
    const[NomeFantasia, setNomeFantasia] = useState()
    const[senhaEstabelecimento, setSenhaEstabelecimento] = useState()
    const[confirmaSenhaEstabelecimento, setConfirmaSenhaEstabelecimento] = useState()
    const[telefoneEstabelecimento, setTelefoneEstabelecimento] = useState()
    const[lotacao, setLotacao] = useState()
    const[horaAbertura, setHoraAbertura] = useState()
    const[horaFechamento, setHoraFechamento] = useState()
    const[descricao, setDescricao] = useState()

    //dados cliente
    const[nome, setNome] = useState()
    const[idade, setIdade] = useState()
    const[emailCliente, setEmailCliente] = useState()
    const[senhaCliente, setSenhaCliente] = useState()
    const[confirmaSenhaCliente, setConfirmaSenhaCliente] = useState()
    const[celular, setCelular] = useState()

    return (
        <Grid container justify="center" alignItems="center" style={{alignItems:"flex-start"}}>
            <Grid item lg style={{margin:20}}>
                <Paper>
                    <Typography variant="h5" style={{textAlign:"center", fontFamily: "'Merienda One', cursive", padding:20, height:40}}>Cadastro de Clientes</Typography>
                    <Grid container direction="column">
                        <Grid item style={{padding:20, margin:0, height:60}}>
                            <TextField fullWidth label="Nome" onChange={(e)=> setNome(e.target.value)}></TextField>
                        </Grid>
                        <Grid item style={{padding:20, margin:0, height:60}}>
                            <TextField fullWidth label="Email" onChange={(e)=> setEmailCliente(e.target.value)}></TextField>
                        </Grid>
                        <Grid container style={{padding:20, height:60}} direction="row">
                            <Grid item sm justify="flex-start" style={{marginRight:20}}>
                                <TextField fullWidth type="number" label="Idade" onChange={(e)=>setTelefoneEstabelecimento(e.target.value)}/>
                            </Grid>
                            <Grid item sm>
                                <TextField fullWidth label="Celular" onChange={(e)=>setCnpj(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{padding:20, margin:0, height:60}}>
                            <TextField fullWidth type="password" label="Senha" onChange={(e)=> setSenhaEstabelecimento(e.target.value)}></TextField>
                        </Grid>
                        <Grid item style={{padding:20, margin:0, height:60}}>
                            <TextField fullWidth type="password" label="Confirmar Senha" onChange={(e)=> setConfirmaSenhaEstabelecimento(e.target.value)}></TextField>
                        </Grid>
                        <Grid item style={{padding:20, margin:0, marginTop:30}}>
                            <Button style={{backgroundColor:"#5A3B23", color:"#fff", fontFamily:"'Merienda One', cursive"}}>CADASTRAR</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item lg style={{margin:20}}>
                <Paper>
                    <Typography variant="h5" style={{textAlign:"center", fontFamily: "'Merienda One', cursive", padding:20, height:40}}>Cadastro de Restaurantes</Typography>
                    <Grid container direction="column">
                        <Grid item style={{padding:20, margin:0, height:60}}>
                            <TextField fullWidth label="Nome Fantasia" onChange={(e)=> setNomeFantasia(e.target.value)}></TextField>
                        </Grid>
                        <Grid item style={{padding:20, margin:0, height:60}}>
                            <TextField fullWidth label="Email" onChange={(e)=> setEmailEstabelecimento(e.target.value)}></TextField>
                        </Grid>
                        <Grid container style={{padding:20, height:60}} direction="row">
                            <Grid item sm justify="flex-start" style={{marginRight:20}}>
                                <TextField fullWidth label="Telefone" onChange={(e)=>setTelefoneEstabelecimento(e.target.value)}/>
                            </Grid>
                            <Grid item sm>
                                <TextField fullWidth label="CNPJ" onChange={(e)=>setCnpj(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{padding:20, height:60}} direction="row">
                            <Grid item sm direction="column" justify="flex-start" style={{marginRight:20}}>
                                <Typography style={{textAlign:"left", marginTop:10}}>Horário de Abertura</Typography>
                                <TextField fullWidth type="time" onChange={(e)=>setTelefoneEstabelecimento(e.target.value)}/>
                            </Grid>
                            <Grid item sm>
                                <Typography style={{textAlign:"left", marginTop:10}}>Horário de Encerramento</Typography>
                                <TextField fullWidth type="time" onChange={(e)=>setCnpj(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{padding:20, marginTop:20, height:60}}>
                            <Typography style={{textAlign:"left", marginTop:10}}>Descrição</Typography>
                            <TextField fullWidth multiline="true" rows="5" placeholder="Digite aqui um pequeno texto que será exibido para os clientes..." onChange={(e)=>setCnpj(e.target.value)} />
                        </Grid>
                        <Grid container style={{padding:20, height:60, marginTop:90}}>
                            <TextField fullWidth type="password" label="Senha" onChange={(e)=> setSenhaEstabelecimento(e.target.value)}></TextField>
                        </Grid>
                        <Grid item style={{padding:20, margin:0}}>
                            <TextField fullWidth type="password" label="Confirmar Senha" onChange={(e)=> setConfirmaSenhaEstabelecimento(e.target.value)}></TextField>
                        </Grid>
                        <Grid item style={{padding:20, margin:0}}>
                            <Button style={{backgroundColor:"#5A3B23", color:"#fff", fontFamily:"'Merienda One', cursive"}}>CADASTRAR</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Register
