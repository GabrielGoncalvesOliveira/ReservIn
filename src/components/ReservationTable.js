import React from 'react'
import {DataGrid, GridApi} from '@material-ui/data-grid'
import {Button, Typography, Grid} from '@material-ui/core'

const ReservationTable = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        {
            field: "button",
            description: "botãozao da brara",
            sortable: "false",
            width:"160",
            headerName: "Action",
            disableClickEventBubbling: true,
            renderCell: (params) => {
              const onClick = () => {
                const api: GridApi = params.api;
                const fields = api
                  .getAllColumns()
                  .map((c) => c.field)
                  .filter((c) => c !== "__check__" && !!c);
                const thisRow = {};
        
                fields.forEach((f) => {
                  thisRow[f] = params.getValue(f);
                });
        
                return alert(JSON.stringify(thisRow, null, 4));
              };
        
              return <Button onClick={onClick}>Click</Button>;
            }
        }
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: 'Eliane', age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
      
      
    return (
        <div style={{marginLeft:360, height:440, width:800, marginTop:40}}>
            <Grid container justify="center" style={{marginBottom:20}}>
                <Grid item>
                <Typography variant="h4" style={{fontFamily:"'Merienda One', cursive"}}>RESERVAS A APROVAR</Typography>
                </Grid>
            </Grid>
            
            <DataGrid rows={rows} columns={columns} pageSize={6}/>
        </div>
    )
}

export default ReservationTable
