import './Movies.css';
import  Movie  from './Movie';
import { useSelector } from 'react-redux';


function Movies() {
    const movies = useSelector(state => state.moviesLoaded)

    return (
        <div className='movies-container'>
            {
                movies.map(m => (
                        <Movie 
                        key={m.imdbID}
                        id={m.imdbID}
                        title={m.Title}
                        year={m.Year}
                        poster={m.Poster}
                        />
                )

                )
            }
        </div>
    )
}

export default Movies;