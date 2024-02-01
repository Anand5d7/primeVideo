// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <h1 className="title">Action Movies</h1>
        <MoviesSlider
          moviesList={actionMoviesList}
          className="slide-container"
        />
        <h1 className="title">Comedy Movies</h1>
        <MoviesSlider
          moviesList={comedyMoviesList}
          className="slide-container"
        />
      </div>
    </div>
  )
}

export default PrimeVideo
