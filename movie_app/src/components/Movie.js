import './Movie.css';
import { Link } from 'react-router-dom'

function Movie({id, title, year, poster}) {
    return (
        <div className='movie-container'>
            <div className='movie-img'>
                <img src = {poster} alt = 'movie poster' />
            </div>
            <div className='movie-name'>
                <Link className = 'movie-link' to ={`/movie_detail/${id}`}>
                    <h4 className='movie-title'>Title: {title}</h4>
                </Link>
            </div>
            <div className='movie-year'>Year: {year}</div>


        </div>
    )
}

export default Movie;