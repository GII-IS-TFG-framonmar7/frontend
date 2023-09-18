import { useEffect, useState } from 'react'
import { moviesApi } from '../api/moviesApi'

export const useMovies = () => {
    const [movies, setMovies ] = useState([]);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async() => {
        const resp = await moviesApi.get('http://127.0.0.1:8000/api/v1/movies/');
        setMovies( resp.data );
    }

    return {
        movies
    }
}
