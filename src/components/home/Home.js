import React, { useEffect, useState } from 'react';
import MovieList from "../movieList/MovieList";

export default function Home() {

    const [movies, setMovies] = useState([]);
    async function getMovie() {

        const url = "https://movies-haimour.herokuapp.com/trending";
        let response = await fetch(url);
        let movieData = await response.json();
        setMovies(movieData);
    }

    function updateMovie(newMovie, id) {
        let updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                movie.comment = newMovie.userComment;
                return movie;
            } else {
                return movie;
            }
        })

        setMovies = (updatedMovies);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <div
                style={{

                    backgroundColor: " rgb(42, 40, 40) ",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(18rem,1fr))",
                }}
            >

                {

                    (movies.length > 0) && <MovieList movies={movies} updateMovie = {updateMovie} />
                }
            </div>
        </>
    );
}
