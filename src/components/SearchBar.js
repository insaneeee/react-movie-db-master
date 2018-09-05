import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import SearchResult from './SearchResult'
import { searchMovie } from '../Api'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      searchTerm: ''
    }
  }

  onInputChange = event => {
    const { value } = event.target
    this.setState({
      searchTerm: value
    })
  }

  addMovie = movie => {
    console.log(movie)
  }

  search = event => {
    event.preventDefault()
    searchMovie(this.state.searchTerm).then(response => {
      this.setState({
        results: [response.data]
      })
    })
  }
  render() {
    const { results, searchTerm } = this.state
    return (
      <div className="search-bar">
        <TextField
          label="Add a new movie"
          margin="normal"
          value={searchTerm}
          fullWidth
          onChange={this.onInputChange}
        />
        <IconButton onClick={this.search}>
          <Icon>search</Icon>
        </IconButton>
        <div className="search-results">
          {results.length > 0
            ? results.map(movie => (
                <SearchResult
                  key={movie.imdb_id}
                  movie={movie}
                  addMovie={this.addMovie}
                />
              ))
            : ''}
        </div>
      </div>
    )
  }
}

export default SearchBar
