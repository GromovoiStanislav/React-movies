import React, { useState, useEffect } from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/SearchFn'

const API_KEY = process.env.REACT_APP_API_KEY
const searchDefault = 'matrix'

const Main = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //console.log(process.env)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchDefault}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setMovies([])
        setLoading(false)
      })
  }, [])

  const searchMovies = (str, type = 'all') => {
    setLoading(true)

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setMovies([])
        setLoading(false)
      })
  }

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} searchDefault={searchDefault} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  )
}

export { Main }
