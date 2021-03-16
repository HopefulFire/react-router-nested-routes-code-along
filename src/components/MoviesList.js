import React from "react"
import { Link } from "react-router-dom"

const MoviesList = ({ movies }) => {
  const movieLinks = Object.keys(movies).map((movieId) => {
    return (
      <div>
        <Link key={movieId} to={`/movies/${movieId}`}>
          {movies[movieId].title}
        </Link>
      </div>
    )
  })

  return (
    <div>
      {movieLinks}
    </div>
  )
}

export default MoviesList