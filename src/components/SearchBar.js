import React from 'react'
import {Input, IconButton, InputAdornment, TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const handleSearch=()=>{
    
}

const SearchBar = () => {
    return (
        
        <Input
             
            placeholder="Insira o nome da cidade..." 
            fullWidth
            variant="filled"
            
            endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleSearch}>
                        <SearchIcon/>
                    </IconButton>
                </InputAdornment>
            }
        />  
    )
}

export default SearchBar
