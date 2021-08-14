import React from 'react'
import {DataGrid} from '@material-ui/data-grid'
import {Button, Typography, Grid, Snackbar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import DialogReservationStatus from './DialogReservationStatus';


// const changeStatus = ({idReserva, idstatus}) =>{
//   alert(idReserva+' '+idstatus)
// }

function Alert(props){
  return <MuiAlert elevation={6} variant="filled" {...props}/>
}

const ReservationTable = ({type}) => {
    const[openSnack, setOpenSnack] = React.useState(false);
    const[open, setOpen] = React.useState(false);
    const[selectedReserve, setSelectedReserved] = React.useState('');
    const[actionText, setActionText] = React.useState();

    const onAccept = () =>{
      setOpenSnack(true);
      setOpen(false);
    }

    // const handleSnack=()=>{
    //   setOpenSnack(true);
    // }

    const handleCloseSnack=(event, reason)=>{
      if(reason === "clickaway"){
        return;
      }
      setOpenSnack(false);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nome', width: 130 },
        {
          field: 'age',
          headerName: 'Idade',
          type: 'number',
          width: 90,
        },
        {
          field: 'date',
          headerName: 'Data',
          type: 'date',
          width:120,
          // valueFormatter: (params) => {
          //   const valueFormated = params.substr(8,9)+'/'+params.substr(5,6)+'/'+params.substr(0,3)
          //   return valueFormated;
          // }
        },
        {
          field: 'time',
          headerName: 'Hora',
          width: 100,
        },
        {
          field: 'qtd',
          headerName:'Qtd. Pessoas',
          width:140,
        },
        (type!=='Canceladas' && type!=='Concluidas')?
        {
            field: "button",
            sortable: "false",
            width:"400",
            headerName: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Ações⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
            disableClickEventBubbling: true,
            renderCell: (params) => {
              const onClick = () => {
                const api = params.api;
                const fields = api
                  .getAllColumns()
                  .map((c) => c.field)
                  .filter((c) => c !== "__check__" && !!c);
                const thisRow = {};
                fields.forEach((f) => {
                  thisRow[f] = params.getValue(f);
                });
                if(type === "A Aprovar"){
                  console.log(thisRow['id']);
                  if(type === 'A Aprovar'){
                    setActionText('aprovar')
                  }else if(type === 'Aprovadas'){
                    setActionText('iniciar')
                  }else if('Andamento'){
                    setActionText('concluir')
                  }
                  setSelectedReserved(thisRow['id']);
                  console.log({selectedReserve})
                  setOpen(true);
                }else if(type === "Aprovada"){
                  // changeStatus(thisRow[f].id, 2);
                }else if(type === "Andamento"){
                  // changeStatus(thisRow[f].id, 3);
                }
              };
              const onClickCancel = () => {
                const api = params.api;
                const fields = api
                  .getAllColumns()
                  .map((c) => c.field)
                  .filter((c) => c !== "__check__" && !!c);
                const thisRow = {};
                alert('Cancelando reserva')
                fields.forEach((f) => {
                  thisRow[f] = params.getValue(f);
                  // changeStatus(thisRow[f].id, 5);
                });

                setActionText("cancelar");
                setSelectedReserved(thisRow['id']);
                setOpen(true);
              }
                if(type !=="Canceladas" && type !=="Concluidas"){
                  return <><Button onClick={onClick}>Prosseguir</Button><Button onClick={onClickCancel}>Cancelar</Button></>;
                }
               
              
            }
        }:{},
        (type==='Concluidas')?{
          field:'value',
          headerName:'Valor',
          width: 120,
        }:{},
        
      ];
      
      const rows = [
        { id: 1, name: 'Gabriel', age: 35, date: new Date('2021-03-16'), time: '20:00:00', value:'R$ 20,00', qtd:'4'},
        { id: 2, name: 'Eliana', age: 19, date: new Date('2021-01-17'), time: '11:00:00', value: 'R$ 40,00', qtd:'2'},
        { id: 3, name: 'Henrique', age: 22, date: new Date('2021-04-09'), time: '13:30:00', value: 'R$ 55,00', qtd:'1'},
        // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        // { id: 6, lastName: 'Melisandre', firstName: 'Eliane', age: 150 },
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

      
      
    return (
        <div style={{marginLeft:(type!=='Canceladas' && type!=='Concluidas')?'55vh':'65vh', height:438, width:(type!=='Canceladas'&&type!=='Concluidas')?900:775, marginTop:40}}>
            <Grid container justify="center" style={{marginBottom:20}}>
                <Grid item>
                <Typography variant="h4" style={{fontFamily:"'Merienda One', cursive"}}>Reservas {type}</Typography>
                </Grid>
            </Grid>
            
            <DataGrid rows={rows} columns={columns} pageSize={6}/>
            <DialogReservationStatus open={open} onAccept={onAccept} onDeny={onAccept} textAction={actionText}/>
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseSnack}>
              <Alert onClose={handleCloseSnack} severity="success">
                Prosseguindo com a reserva de id: {selectedReserve}
              </Alert>
            </Snackbar>
        
        </div>
    )
}

export default ReservationTable
