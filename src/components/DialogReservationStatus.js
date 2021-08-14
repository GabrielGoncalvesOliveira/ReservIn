import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import React from 'react'
import PropTypes from 'prop-types';

const DialogReservationStatus = (props) => {

    const {open, onAccept, onDeny, textAction} = props;

    DialogReservationStatus.propTypes = {
        onDeny: PropTypes.func.isRequired,
        onAccept: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        textAction: PropTypes.string.isRequired,
    };

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
                Deseja prosseguir a ação de {textAction}?
                </DialogContentText>
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

export default DialogReservationStatus
