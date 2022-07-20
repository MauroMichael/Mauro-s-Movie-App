export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const CLEAR_MOVIE_DETAIL = 'CLEAR_MOVIE_DETAIL';

const apiKey = '2621b91a';

export function addMovieFavorite(payload) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: payload
    }
}

export function getMovies(title) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apiKey=${apiKey}&s=` + title)
        .then(r => r.json())
        .then(json => {
            dispatch({type: GET_MOVIES,
                       payload: json})
        })
    }
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apiKey=${apiKey}&i=` + id)
        .then(r => r.json())
        .then(json => {
            dispatch({type: GET_MOVIE_DETAIL,
                       payload: json})
        })
    }
}

export function clearMovieDetail() {
    return {
        type: CLEAR_MOVIE_DETAIL
    }
}

export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}