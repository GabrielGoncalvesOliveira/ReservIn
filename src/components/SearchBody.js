import React from 'react'
import SearchBar from './SearchBar.js'
import {Grid} from '@material-ui/core'
import CardRestaurant from './CardRestaurant.js'

const SearchBody = ({search}) => {
    const clickFunction = () => {
        alert('Clickado maluco Clickado')
    }
    return (
        <div>
            <Grid container alignItems="center" justify="center">
                <Grid lg item alignItems="center" style={{margin:150}} >
                    <SearchBar/>
                </Grid>
            </Grid>

            <Grid container direction="row" style={{padding:40}}>
                <Grid item sm>
                    <CardRestaurant nameRestaurant="Mac Ronald" buttonFunction={clickFunction}/>
                </Grid>
                <Grid item sm style={{marginRight:15, marginLeft:15}}>
                    <CardRestaurant nameRestaurant="Pizza King" buttonFunction={clickFunction}/>
                </Grid>
                <Grid item sm>
                    <CardRestaurant nameRestaurant="Tictactoe's" buttonFunction={clickFunction}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchBody
