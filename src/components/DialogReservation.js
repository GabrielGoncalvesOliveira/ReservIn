import { Typography } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Grid } from '@material-ui/core'
import React from 'react'

const DialogReservation = (props) => {

    const{open, onAccept, onDeny} = props;
    return (
        <Dialog
            open={open}
            keepMounted
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Confirmação"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Insira os dados a seguir para continuar com a solicitação da reserva
                </DialogContentText>
                <Grid container direction="row" justify="center">
                    <Grid item direction="column" xs style={{margin:8}}>
                        <Typography variant="body2">Data</Typography>
                        <TextField
                            //label="Data da resreva"
                            type="date"
                            id="date"
                            margin="dense"
                            fullWidth
                        />
                    </Grid>
                    <Grid direction="column" item xs style={{margin:8}}>
                    <Typography variant="body2">Horário</Typography>
                    <TextField
                        //label="Horário da reserva"
                        type="time"
                        id="time"
                        margin="dense"
                        fullWidth
                    />
                    </Grid>
                    <Grid direction="column" item xs style={{margin:8}}>
                        <Typography variant="body2">Qtd Pessoas</Typography>
                        <TextField
                            //label="Pessoas"
                            id="qtd"
                            margin="dense"
                            type="number"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                {/* <Grid container direction="row" justify="center">
                    <Grid item xs style={{marginRight:10}}>
                        
                    </Grid>
                    <Grid item xs>
                       
                    </Grid>
                    <Grid item xs style={{marginLeft:10}}>
                        
                    </Grid>
                </Grid> */}
                
            </DialogContent>
            <DialogActions>
                <Button onClick={onAccept}>
                    Sim
                </Button>
                <Button onClick={onDeny}>
                    Não
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogReservation
