import React, { useState, useEffect } from 'react';
import "./search.scss";
import { Link } from 'react-router-dom';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            // Make an API request to fetch movies when the search query changes
            fetch(`http://localhost:8800/api/movies/search?query=${searchQuery}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Failed to fetch movies");
                    }
                })
                .then((data) => {
                    setMovies(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            // Clear the movies when the search query is empty
            setMovies([]);
        }
    }, [searchQuery]);

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for movies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <div className="movie-list">
                {movies.map((movie) => (
                    //<Link to={{ pathname: "/watch", movie: movie }}>
                    //<Link to="/watch" state={{movie}}>
                    <Link
                        key={movie._id}
                        to= "/watch" state= { {movie} }
                        
                    >
                        <div className="movie-details">
                            <div className="movie-image-container">
                                <img src={movie.img} alt={`Image for ${movie.title}`} />
                            </div>
                            <h2>{movie.title}</h2>
                            <p>Year: {movie.year}</p>
                            <p>Genre: {movie.genre}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Search;
