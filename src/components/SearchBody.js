import React from 'react'
import SearchBar from './SearchBar.js'
import {Grid, Snackbar} from '@material-ui/core'
import CardRestaurant from './CardRestaurant.js'
import DialogReservation from './DialogReservation'
import MuiAlert from '@material-ui/lab/Alert'

const SearchBody = ({search}) => {
    const clickFunction = () => {
        setOpen(true);
    }
    const [open, setOpen] = React.useState(false);
    const[openSnack, setOpenSnack] = React.useState(false);

    const onAccept = () =>{
        setOpenSnack(true);
        setOpen(false);
    }

    const onDeny = () => {
        setOpen(false);
        setOpenSnack(false);
    }

    const Alert = (props) =>{
        return <MuiAlert elevation={6} variant="filled" {...props}/>
    }
    return (
        <div>
            <Grid container alignItems="center" justify="center">
                <Grid lg item alignItems="center" style={{margin:150}} >
                    <SearchBar/>
                </Grid>
            </Grid>

            <Grid container direction="row" style={{padding:40}}>
                <Grid item sm style={{margin:8}}>
                    <CardRestaurant nameRestaurant="Mac Ronald" buttonFunction={clickFunction}/>
                </Grid>
                <Grid item sm style={{margin:8}}>
                    <CardRestaurant nameRestaurant="Pizza King" buttonFunction={clickFunction}/>
                </Grid>
                <Grid item sm style={{margin:8}}>
                    <CardRestaurant nameRestaurant="Tictactoe's" buttonFunction={clickFunction}/>
                </Grid>
            </Grid>
            <DialogReservation open={open} onAccept={onAccept} onDeny={onDeny}/>
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={onDeny}>
                <Alert onClose={onDeny} severity="success">
                    Reserva solicitada
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SearchBody
