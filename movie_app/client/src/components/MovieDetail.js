import './MovieDetail.css';
import { useParams } from 'react-router-dom';
import { clearMovieDetail, getMovieDetail } from '../actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetail() {
    const {id} = useParams()
    const movieDetail = useSelector(state => state.movieDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetail(id))
        dispatch(clearMovieDetail())

    },[dispatch, id])

    return (
        <div className='detail-container'>
            <h1>{movieDetail.Title}</h1>
            <div className='detail-container'>
                <img className='prop'src={movieDetail.Poster} alt='movie poster'/>
                <div><span className='prop'></span>Year: {movieDetail.Year}</div>
                <div><span className='prop'></span>Runtime: {movieDetail.Runtime}</div>
                <div><span className='prop'></span>Director: {movieDetail.Director}</div>
                <div><span className='prop'></span>Actors: {movieDetail.Actors}</div>
                <div><span className='prop'></span>Synopsis: {movieDetail.Plot}</div>
                <div><span className='prop'></span>Awards: {movieDetail.Awards}</div>
                <div><span className='prop'></span>IMDB Rating: {movieDetail.Ratings?.[0].Value}</div>

            </div>

        </div>
    )
}

export default MovieDetail;