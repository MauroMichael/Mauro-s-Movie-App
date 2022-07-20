import './Search.css';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../actions';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getMovies(title));
        setTitle('');
        navigate('/')
    }

    return (
        <div className='search-container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <label className='label' htmlFor='title'> Movie: </label>
                <input 
                    type='text'
                    id='title'
                    autoComplete='off'
                    value={title}
                    onChange={handleChange}
                    />
                <button className='form-submit' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;