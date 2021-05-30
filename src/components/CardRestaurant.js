import {Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const CardRestaurant = ({nameRestaurant, buttonFunction}) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="title2">{nameRestaurant}</Typography>
                    <Typography variant="body2">Venha experimentar de nossas especiarias de cozinha, temos certeza que você irá amar!</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={buttonFunction}>
                        Reservar
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardRestaurant
