import { ADD_MOVIE_FAVORITE, CLEAR_MOVIE_DETAIL, GET_MOVIES, GET_MOVIE_DETAIL } from '../actions'
const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload)
            }
        
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case CLEAR_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: {}
            }

        default:
            return state
            
    }
}

export default rootReducer;