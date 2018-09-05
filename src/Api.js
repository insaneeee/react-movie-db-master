import axios from 'axios'

import { ImdbApiKey } from './AppConfig'

const ImdbApiUrl = 'http://imdbapi.net/api'

export function getMovies() {
  return axios.get('http://localhost:5000/movies')
}

export function searchMovie(term) {
  return axios.post(ImdbApiUrl, {
    key: ImdbApiKey,
    title: term
  })
}
