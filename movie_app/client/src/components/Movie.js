import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, title, year, poster }) {
  return (
    <div className="movie-container">
      <div className="movie-content">
        <img className="movie-img" src={poster} alt="movie poster" />
        <div className="movie-name">
          <Link className="movie-link" to={`/movie_detail/${id}`}>
            <h4 className="movie-title">{title}</h4>
          </Link>
        </div>
        <div className="movie-year">Year: {year}</div>
      </div>
      <button className="movie-favorite-button" type='button'>Add to Favorites</button>
    </div>
  );
}

export default Movie;
