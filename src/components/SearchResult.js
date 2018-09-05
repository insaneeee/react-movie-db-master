import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import './SearchBar.css'

export default function SearchResult(props) {
  const { movie, addMovie } = props
  return (
    <div>
      <Card>
        <CardContent>
          <Typography>
            {movie.title} ({movie.year})
          </Typography>
        </CardContent>
      </Card>
      <IconButton onClick={addMovie(movie)}>
        <Icon>add</Icon>
      </IconButton>
    </div>
  )
}
