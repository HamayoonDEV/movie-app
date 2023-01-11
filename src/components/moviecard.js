import React from 'react'
import './moviecard.css'

class Moviecard extends React.Component {
    render(){
        const{movie} = this.props
  return (
    <div className='movie-card'>
        <div className='left'>
            <img alt='movie-poster' src={movie.imageurl} />
        </div>
        <div className='right'>
            <div className='title'>{movie.moviename}</div>
            <div className='release'> Release : {movie.release}</div>
            <div className='rating-main' > <div className='rating'>{movie.ratings}</div>
            <div className='button' ><button className='btn1'>favourit</button></div>
            </div>
        </div>
    </div>
  )}
}

export default Moviecard