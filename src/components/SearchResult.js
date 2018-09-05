import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import './SearchBar.css'

export default function SearchResult(props) {
  const { movie, addMovie } = props
  return (
    
      <Card>
        <CardContent>
          <Typography>
            {movie.title} ({movie.year})
          </Typography>
        </CardContent>
        <CardActions>
        <Button onClick={addMovie(movie)}>
        <Icon>add</Icon>
        Add Movie
      </Button>
          </CardActions>
      </Card>
    
  )
}
