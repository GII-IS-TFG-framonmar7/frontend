import React from 'react'
import { useMovies } from '../hooks/useMovies'

export const MoviesPage = () => {

    const { movies } = useMovies();

    return (
        <div className="mt-5">
            <div className="row m-2">
                <div className="col-md-4 bg-primary d-flex justify-content-center p-3">Short column example</div>
                <div className="col-md-8 bg-secondary d-flex justify-content-center p-3">Large column example</div>
            </div>
            <div className="row m-2 mt-5">
                <h1>Movies</h1>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Director</th>
                            <th>Release year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map( movie => (
                                <tr key={ movie.name }>
                                    <td>{ movie.name }</td>
                                    <td>{ movie.director }</td>
                                    <td>{ movie.releaseYear }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
