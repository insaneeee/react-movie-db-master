import React from 'react'
import MovieItem from './MovieItem'
import SearchBar from './components/SearchBar'

import './MovieList.css'

function MovieList(props) {
  const { movies = [] } = props
  return (
    <div className="movie-list">
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="movies-container">
        {movies.length > 0
          ? movies.map(movie => (
              <MovieItem
                title={movie.name}
                year={movie.year}
                description={movie.description}
                key={movie.id}
              />
            ))
          : 'No movies found. Perhaps add one?'}
      </div>
    </div>
  )
}

export default MovieList
